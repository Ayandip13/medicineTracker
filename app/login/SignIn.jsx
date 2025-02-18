import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../configs/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [secureText, setSecureText] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const OnSignInClick = () => {
    if ((!email, !password)) {
      ToastAndroid.show("Please fill all details", ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.push("(tabs)"); //if user is there, means if sucessfully logged in then the user. then we'll go to the nest screen
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid email or password", ToastAndroid.BOTTOM);
        }
      });
  };

  return (
    <View style={{ padding: 25, backgroundColor: "#E8F9FF", flex: 1 }}>
      <StatusBar backgroundColor="#E8F9FF" />
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
          onChangeText={(e) => setEmail(e)}
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
          onChangeText={(e) => setPassword(e)}
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
        activeOpacity={0.8}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
        onPress={()=>OnSignInClick()}
      >
        <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("login/SignUp")}
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
