import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import { TypeList, WhenToTake } from "../Constants/Options";
import { Picker } from "@react-native-picker/picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  fomatDateForText,
  formatTime,
  formDate,
  getRangeDate,
} from "../service/ConvertDateTime";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../configs/FirebaseConfig";
import { getLocalStorage } from "./../service/Storage";
import { useRouter } from "expo-router";

const AddMedicationForm = () => {
  const [formData, setFormData] = useState("");
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  console.log(formData);

  const saveMedication = async () => {
    const docId = Date.now().toString();
    const user = await getLocalStorage("userDetail");

    if (
      !(
        formData?.name ||
        formData?.type ||
        formData?.dose ||
        formData?.startDate ||
        formData?.endDate ||
        formData?.reminder
      )
    ) {
      Alert.alert("Enter All Fields");
      return;
    }
    setLoading(true);
    const dates = getRangeDate(formData?.startDate, formData?.endDate);
    console.log(dates);
    try {
      await setDoc(doc(db, "medication", docId), {
        ...formData,
        userEmail: user?.email,
        docId: docId,
        dates: dates
      });
      console.log("Data saved");
      setLoading(false);
      Alert.alert("Greet", "New Medications are added succesfully!", [
        {
          text: "OK!",
          onPress: () => router.push("(tabs)"),
        },
      ]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Medication</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="medkit-outline" size={25} style={styles.icon} />
        <TextInput
          onChangeText={(value) => onHandleInputChange("name", value)}
          placeholder="Medicine Name"
          style={styles.textInput}
        />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={TypeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onHandleInputChange("type", item)}
            style={[
              styles.typeButton,
              {
                backgroundColor:
                  item.name == formData?.type?.name ? Colors.PRIMARY : "white",
              },
            ]}
          >
            <Text
              style={{
                fontSize: 16,
                color: item.name == formData?.type?.name ? "white" : "black",
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.inputContainer}>
        <Ionicons name="eyedrop-outline" size={25} style={styles.icon} />
        <TextInput
          onChangeText={(value) => onHandleInputChange("dose", value)}
          placeholder="Dose Ex. 2, 5ml"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="time-outline" size={25} style={styles.icon} />
        <Picker
          selectedValue={formData?.when}
          onValueChange={(itemValue) => onHandleInputChange("when", itemValue)}
          style={styles.picker}
        >
          {WhenToTake.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => setShowStartDate(true)}
          style={styles.dateContainer}
        >
          <Ionicons
            name="calendar-number-outline"
            size={25}
            style={styles.icon}
          />
          <Text style={styles.dateText}>
            {fomatDateForText(formData?.startDate) ?? "Start Date"}
          </Text>
        </TouchableOpacity>
        {showStartDate && (
          <RNDateTimePicker
            minimumDate={new Date()}
            onChange={(e) => {
              onHandleInputChange(
                "startDate",
                formDate(e.nativeEvent.timestamp)
              );
              setShowStartDate(false);
            }}
            value={new Date(formData?.startDate) ?? new Date()}
          />
        )}

        <TouchableOpacity
          onPress={() => setShowEndDate(true)}
          style={styles.dateContainer}
        >
          <Ionicons
            name="calendar-number-outline"
            size={25}
            style={styles.icon}
          />
          <Text style={styles.dateText}>
            {fomatDateForText(formData?.endDate) ?? "End Date"}
          </Text>
        </TouchableOpacity>
        {showEndDate && (
          <RNDateTimePicker
            minimumDate={new Date()}
            onChange={(e) => {
              onHandleInputChange("endDate", formDate(e.nativeEvent.timestamp));
              setShowEndDate(false);
            }}
            value={new Date(formData?.endDate) ?? new Date()}
          />
        )}
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => setShowTimePicker(true)}
          style={styles.dateContainer}
        >
          <Ionicons name="time-outline" size={25} style={styles.icon} />
          <Text style={styles.dateText}>
            {formData?.reminder ?? "Select Reminder Time"}
          </Text>
        </TouchableOpacity>
      </View>

      {showTimePicker && (
        <RNDateTimePicker
          mode="time"
          onChange={(e) => {
            onHandleInputChange(
              "reminder",
              formatTime(e.nativeEvent.timestamp)
            );
            setShowTimePicker(false);
          }}
          value={new Date(formData?.reminder) ?? new Date()}
        />
      )}

      <TouchableOpacity
        onPress={saveMedication}
        style={styles.button}
        activeOpacity={0.7}
      >
        {loading ? (
          <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
        ) : (
          <Text style={styles.buttonText}>Add New Medication</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 9,
    borderWidth: 0.2,
    borderRadius: 8,
    marginTop: 10,
    paddingLeft: 14,
  },
  icon: {
    color: Colors.PRIMARY,
    borderRightWidth: 0.8,
    paddingRight: 12,
  },
  textInput: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
  },
  typeButton: {
    margin: 10,
    borderWidth: 0.4,
    padding: 10,
    backgroundColor: "white",
    borderColor: Colors.DARK_GRAY,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  picker: {
    width: "90%",
  },
  rowContainer: {
    flexDirection: "row",
    gap: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 9,
    borderWidth: 0.2,
    borderRadius: 8,
    marginTop: 10,
    flex: 1,
    paddingLeft: 14,
  },
  dateText: {
    fontSize: 16,
    padding: 10,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default AddMedicationForm;
