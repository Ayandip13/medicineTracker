import { View, Text, Button } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";
import { removeLocalStorage } from "../../service/Storage";
import Header from "../../components/Header";

const HomeScreen = () => {
  return (
    <View
      style={{ padding: 25, backgroundColor: "white", height: "100%" }}
    >
      <Header/>
    </View>
  );
};

export default HomeScreen;
