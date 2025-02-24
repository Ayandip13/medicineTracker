import { View, Text, Button } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";
import { removeLocalStorage } from "../../service/Storage";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Constants/Colors";
import EmptyState from "../../components/EmptyState";
const HomeScreen = () => {
  return (
    <View style={{ padding: 25, backgroundColor: "white", height: "100%" }}>
      <Header />
      <Ionicons
        style={{ left: 280, marginTop: -14 }}
        name="settings-outline"
        size={25}
        color={Colors.DARK_GRAY}
      />
      <EmptyState />
    </View>
  );
};

export default HomeScreen;
