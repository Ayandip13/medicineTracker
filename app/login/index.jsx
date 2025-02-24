import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "#E8F9FF", flex: 1 }}>
      <StatusBar backgroundColor="#E8F9FF" />
      <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
        <Image
          source={require("../../assets/images/edge_cropped_image.png")}
          style={{
            width: 210,
            height: 450,
            borderRadius: 800,
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{ padding: 25, backgroundColor: Colors.PRIMARY, height: "100%" }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            color: "white",
            textAlign: "center",
          }}
        >
          Stay on Track, Stay Healthy!
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 18,
            marginTop: 20,
          }}
        >
          Track your meds, take control over your health
        </Text>
        <TouchableOpacity
          onPress={() => router.push("login/SignIn")}
          activeOpacity={0.6}
          style={{
            padding: 15,
            backgroundColor: "white",
            borderRadius: 99,
            marginTop: 19,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 18, color: Colors.PRIMARY }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "white", marginTop: 15 }}>
          Note: By Clicking Continue button, you will agree to our terms and
          conditions
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
