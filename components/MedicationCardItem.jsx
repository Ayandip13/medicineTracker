import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const MedicationCardItem = ({ medicine }) => {
  return (
    <View style={styles?.container}>
      <View style={styles?.subContainer}>
        <View style={styles?.imageContainer}>
          <Image
            source={{ uri: medicine?.type.icon }}
            style={{ height: 60, width: 60 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            {medicine?.name}
          </Text>
          <Text style={{ fontSize: 16 }}>{medicine?.when}</Text>
          <Text style={{ color: "white" }}>
            {medicine?.dose} {medicine?.type.name}
          </Text>
        </View>
      </View>
      <View>
        <FontAwesome name="times-circle" size={25} color="black" />
        <Text>{medicine?.reminder}</Text>
      </View>
    </View>
  );
};

export default MedicationCardItem;

const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
    backgroundColor: "white",
    marginRight: 15,
    borderRadius: 15,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.PRIMARY,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
  },
});
