import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../service/Storage";

const Header = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    GetUserDetail();
  }, []);

  const GetUserDetail = async () => {
    const userInfo = await getLocalStorage("userDetail");
    setUser(userInfo);
  };

  return (
    <View>
      <View style={{flex:1, flexDirection:'row', alignItems:'center', gap:10}}>
        <Image
          source={require("../assets/images/download.jpg")}
          style={{ height: 40, width: 40 }}
        />
        <Text style={{fontSize:20, fontWeight:'bold'}}>Hello {user?.displayName} 😉</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
