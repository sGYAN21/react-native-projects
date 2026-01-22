import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from '../screens/GetStarted';
import HomeScreen from '../screens/HomeScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

export type RootStackParamList = {
  GetStarted: undefined;
  HomeScreen: undefined;
  CheckoutScreen: undefined;
};



const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer >
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="getstarted" component={GetStarted} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="checkout" component={CheckoutScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}