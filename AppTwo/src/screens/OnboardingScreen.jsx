import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import image1 from "../assets/background.png";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={image1}
          style={styles.imageContainer}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Life is short and the world is
          <Text style={{color:'#ff8b52'}}> wide</Text>
        </Text>

        <Text style={styles.subtitle} numberOfLines={3}>
          At Friends tours and travel, we customize reliable and trustworthy
          educational tours to destinations all over the world
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    height: "55%",
    width: "100%",
    overflow: "hidden",
  },

  imageContainer: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    width: "70%",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 36,
    marginVertical:18
  },
  subtitle: {
    width: "80%",
    fontWeight: 'regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom:28,
    paddingBottom:28
  },
  button: {
    marginTop:48,
    paddingVertical: 18,
    paddingHorizontal: 130,
    backgroundColor: "#0D6EFD",
    borderRadius: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
  },
});
