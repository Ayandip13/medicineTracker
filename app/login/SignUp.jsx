import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../Constants/Colors";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { auth } from "./../../configs/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [textEntry, setTextEntry] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const OnCreateAccount = () => {
    if ((!email, !password)) {
      ToastAndroid.show("Please fill all details", ToastAndroid.BOTTOM);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        if (errorCode == "auth/email-already-in-use") {
          ToastAndroid.show("Email already exist", ToastAndroid.BOTTOM);
        }
      });
  };

  return (
    <View style={{ padding: 25, backgroundColor: "#E8F9FF", flex: 1 }}>
      <StatusBar backgroundColor="#E8F9FF" />
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 18 }}>
        Create New Account
      </Text>

      <View style={{ marginTop: 25 }}>
        <Text style={{ left: 10 }}>Full Name</Text>
        <TextInput
          placeholder="Enter full name"
          keyboardType="name-phone-pad"
          style={{
            padding: 10,
            borderWidth: 0.4,
            fontSize: 17,
            borderRadius: 10,
            marginTop: 5,
            backgroundColor: "white",
          }}
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={{ left: 10 }}>Email</Text>
        <TextInput
          placeholder="Enter the valid Email"
          keyboardType="email-address"
          style={{
            padding: 10,
            borderWidth: 0.4,
            fontSize: 17,
            borderRadius: 10,
            marginTop: 5,
            backgroundColor: "white",
          }}
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Text style={{ left: 10 }}>Password</Text>
        <TextInput
          placeholder="Enter the Password"
          keyboardType="email-address"
          style={{
            padding: 10,
            borderWidth: 0.4,
            fontSize: 17,
            borderRadius: 10,
            marginTop: 5,
            backgroundColor: "white",
          }}
          secureTextEntry={textEntry}
          onChangeText={(e) => setPassword(e)}
        />
        <FontAwesome
          name={textEntry ? "eye" : "eye-slash"}
          size={20}
          style={{ bottom: 33, left: 300 }}
          onPress={() => setTextEntry((prev) => !prev)}
        />
      </View>
      <TouchableOpacity
        onPress={() => OnCreateAccount()}
        activeOpacity={0.8}
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
        onPress={() => router.back("login/SignIn")}
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
          style={{ fontSize: 15, color: Colors.PRIMARY, textAlign: "center" }}
        >
          Already Have Account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;