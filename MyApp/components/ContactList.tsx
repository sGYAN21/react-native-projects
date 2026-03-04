import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
  {
    uid: 1,
    name: "React Team",
    status: "Building UI with components",
    imageUrl: "https://avatars.githubusercontent.com/u/6412038?v=4", // React
  },
  {
    uid: 2,
    name: "MUI",
    status: "Material UI Component Library",
    imageUrl: "https://avatars.githubusercontent.com/u/33663932?v=4", // MUI
  },
  {
    uid: 3,
    name: "shadcn/ui",
    status: "Beautifully designed components",
    imageUrl: "https://avatars.githubusercontent.com/u/139895814?v=4", // shadcn
  },
  {
    uid: 4,
    name: "Next.js",
    status: "The React Framework",
    imageUrl: "https://avatars.githubusercontent.com/u/14985020?v=4", // Next.js
  },
  {
    uid: 5,
    name: "Vercel",
    status: "Frontend Cloud Platform",
    imageUrl: "https://avatars.githubusercontent.com/u/14985020?v=4", // Vercel
  },
  {
    uid: 6,
    name: "Tailwind CSS",
    status: "Utility-first CSS framework",
    imageUrl: "https://avatars.githubusercontent.com/u/67109815?v=4", // Tailwind
  },
  {
    uid: 7,
    name: "Node.js",
    status: "JavaScript runtime environment",
    imageUrl: "https://avatars.githubusercontent.com/u/9950313?v=4", // Node.js
  },
  {
    uid: 8,
    name: "TypeScript",
    status: "Typed JavaScript at scale",
    imageUrl: "https://avatars.githubusercontent.com/u/6154722?v=4", // TypeScript
  },
  {
    uid: 9,
    name: "Framer Motion",
    status: "Production-ready animations",
    imageUrl: "https://avatars.githubusercontent.com/u/76784225?v=4", // Framer
  },
  {
    uid: 10,
    name: "Redux",
    status: "State management for JS apps",
    imageUrl: "https://avatars.githubusercontent.com/u/13142323?v=4", // Redux
  },
];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
      {contacts.map(({uid, name, status, imageUrl})=>(
        <View key={uid} style={styles.userCard}>
            <Image
            source={{
                uri:imageUrl
            }}
            style={styles.userImage}
            />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    headingText:{
        margin:8,
        fontSize:24,
        fontWeight:'bold'
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin:6,
        backgroundColor:'#8D3DAF',
        padding:4,
        borderRadius:14,
    },
    userImage:{
        width:50,
        height:50,
        borderRadius: 50/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:600,
        color:'#FFF'

    },
    userStatus:{
        fontSize:12,
        color:'#FFF'
    },
})
export default ContactList