import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ConstantString from "../Constants/ConstantString";
import Colors from "../Constants/Colors";
import { useRouter } from "expo-router";

const EmptyState = () => {
  const router = useRouter()
  return (
    <View style={{ marginTop: 80, alignItems: "center", display: "flex" }}>
      <Image
        source={require("./../assets/images/medicines.png")}
        style={{ height: 200, width: 200 }}
      />
      <Text style={{ fontSize: 35, marginTop: 30, fontWeight: "700" }}>
        {ConstantString.NoMedication}
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 16,
          fontWeight: "500",
          color: "gray",
          textAlign: "center",
        }}
      >
        {ConstantString.SubMedicationText}
      </Text>
      <TouchableOpacity
      activeOpacity={0.6}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 18,
          borderRadius: 10,
          width: "100%",
          marginTop: 30,
          elevation:9,
        }}
        onPress={()=>router.push('/add-new-medication')}
      >
        <Text style={{textAlign:'center', fontSize:18, color:'white'}}>{ConstantString.AddNewMedicationButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyState;
