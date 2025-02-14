import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();

  return (
    <View style={{ padding: 25 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 18 }}>
        Create New Account
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
          keyboardType="email-address"
          style={{
            padding: 10,
            borderWidth: 0.6,
            fontSize: 17,
            borderRadius: 10,
            marginTop: 5,
            backgroundColor: "white",
          }}
          secureTextEntry={true}
        />
      </View>
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

export default SignUp;
