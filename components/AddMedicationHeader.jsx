import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const AddMedicationHeader = () => {
    const router = useRouter()
  return (
    <View>
      <Image
        source={require("./../assets/images/download (1).png")}
        style={{ height: 300, width: "100%" }}
      />
      <TouchableOpacity style={{position:'absolute', padding:20 }} onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={25} color={'black'}/>
      </TouchableOpacity>
    </View>
  );
};

export default AddMedicationHeader;
