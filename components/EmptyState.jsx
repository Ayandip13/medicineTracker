import { View, Text, Image } from "react-native";
import React from "react";

const EmptyState = () => {
  return (
    <View style={{ marginTop: 80, alignItems: "center", display: "flex" }}>
      <Image
        source={require("./../assets/images/medicines.png")}
        style={{ height: 200, width: 200 }}
      />
      <Text style={{ fontSize: 35, marginTop: 30, fontWeight: "700" }}>
        No Medications!
      </Text>
      <Text style={{ fontSize: 20, marginTop: 16, fontWeight: "500", color:'gray', textAlign:'center' }}>You Have 0 medication setup, Kindly Add your setup!</Text>
    </View>
  );
};

export default EmptyState;
