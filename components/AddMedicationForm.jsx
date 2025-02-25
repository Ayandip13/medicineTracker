import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import { TypeList, WhenToTake } from "../Constants/Options";
import { Picker } from "@react-native-picker/picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { fomatDateForText, formDate } from "../service/ConvertDateTime";

const AddMedicationForm = () => {
  const [formData, setFormData] = useState("");
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  console.log(formData);

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
            value={new Date(formDate?.endDate) ?? new Date()}
          />
        )}
      </View>
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
});

export default AddMedicationForm;
