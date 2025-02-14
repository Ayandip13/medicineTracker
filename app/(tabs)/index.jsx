import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const HomeScreen = () => {
  return (
    <View>
      <Redirect href={'login'}/>
    </View>
  )
}

export default HomeScreen