/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string} | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()
function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title:'Trending Products'}}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
