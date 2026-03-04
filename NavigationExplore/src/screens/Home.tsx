import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { type RootStackParamList } from "../App"

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>


const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Got to Details '
      // onPress={()=>navigation.navigate('Details',{productId :"123"})}

      // onPress={()=> navigation.navigate("Details")}
      onPress={()=> navigation.push('Details',{productId :"123"})}
      />
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red'
  }
})