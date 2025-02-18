import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../configs/FirebaseConfig'

const HomeScreen = () => {
  return (
    <View>
      {/* <Redirect href={'login'}/> */}
      <Text>Homescreen</Text>
      <Button onPress={()=>signOut(auth)} title='Log Out'/>
    </View>
  )
}

export default HomeScreen