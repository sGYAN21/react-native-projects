
import { JSX, useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const generateColor = ()=>{
    const hexRang= "0123456789ABCDEF"
    let color= "#"

    for (let i = 0; i < 6; i++) {
      color += hexRang[Math.floor(Math.random()*16)];
      
    }
    setRandomBackground(color);
  }
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container,{backgroundColor:randomBackground}]}>
        <TouchableOpacity onPress={()=>{generateColor()}} >
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn:{
    borderRadius:50,
    backgroundColor:"#6A1BAD",
    paddingVertical:10,
    paddingHorizontal:40,
  },
  actionBtnText:{
    fontSize:20,
    color:"white",
    textTransform:'uppercase',
  }
})

export default App;
