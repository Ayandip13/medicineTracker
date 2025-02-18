import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";

const TabLayout = () => {
  //if user login or not

  const router = useRouter();
  const [authenticated, setAuthticated] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid); 
      setAuthticated(true)
    } else {
      router?.push("/login");
      setAuthticated(false)
    }
  });


  useEffect(()=>{
    if (authenticated == false) {
      router.push('/login')
    }
  }, [authenticated])





  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-circle" size={24} color={color} />
          ),
          tabBarLabel: "Add Medicine",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          tabBarLabel: "See Profile",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
