import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          tabBarLabel:'Home'
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-circle" size={24} color={color} />
          ),
          tabBarLabel:'Add Medicine'
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          tabBarLabel:'See Profile'
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
