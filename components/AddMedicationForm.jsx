import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import { TypeList, WhenToTake } from "../Constants/Options";
import { Picker } from "@react-native-picker/picker";

const AddMedicationForm = () => {
  const [formData, setFormData] = useState("");

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value, //[field] is Computed Property Name syntax in JavaScript. It allows dynamically setting object keys based on the value of field.
    }));
  };
  //This function ensures that the form dynamically updates and holds user input without overwriting previous values.

  console.log(formData);

  return (
    <View style={{ padding: 25 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        Add New Medication
      </Text>

      <View
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          padding: 9,
          borderWidth: 0.2,
          borderRadius: 8,
          marginTop: 10,
          paddingLeft: 14,
        }}
      >
        <Ionicons
          name="medkit-outline"
          size={25}
          style={{
            color: Colors.PRIMARY,
            borderRightWidth: 0.8,
            paddingRight: 12,
          }}
        />
        <TextInput
          onChangeText={(value) => onHandleInputChange("name", value)}
          placeholder="Medicine Name"
          style={{ flex: 1, marginLeft: 14, fontSize: 16 }}
        />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={TypeList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => onHandleInputChange("type", item)}
            style={[
              {
                margin: 10,
                borderWidth: 0.4,
                padding: 10,
                backgroundColor: "white",
                borderColor: Colors.DARK_GRAY,
                borderRadius: 5,
                paddingHorizontal: 15,
              },
              {
                backgroundColor:
                  item.name == formData?.type?.name ? Colors.PRIMARY : "white",
              },
            ]}
          >
            <Text
              style={[
                { fontSize: 16 },
                {
                  color: item.name == formData?.type?.name ? "white" : "black",
                },
              ]}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          padding: 9,
          borderWidth: 0.2,
          borderRadius: 8,
          marginTop: -1,
          paddingLeft: 14,
        }}
      >
        <Ionicons
          name="eyedrop-outline"
          size={25}
          style={{
            color: Colors.PRIMARY,
            borderRightWidth: 0.8,
            paddingRight: 12,
          }}
        />
        <TextInput
          onChangeText={(value) => onHandleInputChange("name", value)}
          placeholder="Dose Ex. 2, 5ml"
          style={{ flex: 1, marginLeft: 14, fontSize: 16 }}
        />
      </View>

      <View>
        <Ionicons name="time-outline" size={25} color={Colors.PRIMARY} />
        <Picker
          style={{ height: 50, width: 200 }}
        >
          {
            WhenToTake.map((item,index)=>(
              <Picker.Item label={item} value={item} key={index}/>
            ))
          }
        </Picker>
      </View>
    </View>
  );
};

export default AddMedicationForm;
