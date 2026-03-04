// import React from "react";
// import {
//   View,
//   Text,
// } from 'react-native'
// import {SafeAreaView} from "react-native-safe-area-context";

// function App() {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Hello World</Text>
//         <Text>Hello World</Text>
//         <Text>Hello World</Text>
//         <Text>Hello World</Text>
//         <Text>Hello World</Text>
//       </View>
//     </SafeAreaView>
//   )
// }
// export default App

import React from 'react'
import { ScrollView, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

