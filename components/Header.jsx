import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../service/Storage";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    GetUserDetail();
  }, []);

  const GetUserDetail = async () => {
    const userInfo = await getLocalStorage("userDetail");
    setUser(userInfo);
  };
  // console.log(user);
  // console.log(user.displayName);

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <Image
          source={require("../assets/images/download.jpg")}
          style={{ height: 40, width: 40 }}
        />
        <View
          style={{
            backgroundColor: "white",
            height: 70,
            width: 400,
            paddingTop: 25,
            paddingLeft: -5,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "500", color: "black" }}>
            Hello, {user?.displayName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
