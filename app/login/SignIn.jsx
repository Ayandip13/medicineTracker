import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const SignIn = () => {
  const [secureText, setSecureText] = useState(true);

  const router = useRouter();

  return (
    <View style={{ padding: 25 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 18 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginTop: 10,
          fontWeight: "bold",
          color: Colors.GRAY,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginTop: 10,
          fontWeight: "bold",
          color: Colors.GRAY,
        }}
      >
        You've been missed
      </Text>

      <View style={{ marginTop: 25 }}>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter the valid Email"
          keyboardType="email-address"
          style={{
            padding: 10,
            borderWidth: 0.6,
            fontSize: 17,
            borderRadius: 10,
            marginTop: 5,
            backgroundColor: "white",
          }}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter the Password"
          keyboardType="default"
          style={{
            padding: 10,
            borderWidth: 0.6,
            fontSize: 17,
            borderRadius: 10,
            marginTop: 5,
            backgroundColor: "white",
          }}
          secureTextEntry={secureText}
        />
      </View>
      <FontAwesome
        name={secureText ? "eye-slash" : "eye"}
        size={20}
        color={"black"}
        style={{ bottom: 29, left: 280 }}
        onPress={() => setSecureText((prev) => !prev)}
      />
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
        <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("login/signUp")}
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 0.4,
          borderColor: Colors.PRIMARY,
        }}
      >
        <Text
          style={{ fontSize: 18, color: Colors.PRIMARY, textAlign: "center" }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
