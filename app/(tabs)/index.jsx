import { View, Text, Button } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";

const HomeScreen = () => {
  return (
    <View style={{marginTop:40}}>
      {/* <Redirect href={'login'}/> */}
      <Text>Homescreen</Text>
      <Button onPress={removeLocalStorage} title="Log Out" />
    </View>
  );
};

export default HomeScreen;