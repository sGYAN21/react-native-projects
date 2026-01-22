import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "../assets/logo/gemini-logo.png";
import { useState } from "react";
import LoginSheet from "../components/LoginSheet";

const GetStartedScreen = () => {
    const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />

        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => setOpen(true)}
        >
          <Text style={styles.btnText}>Get Started</Text>
          {/* <Ionicons name="arrow-forward" size={20} color="#fff" /> */}
        </TouchableOpacity>
        <LoginSheet visible={open} onClose={() => setOpen(false)} />

      </View>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  content: {
    flex: 0.7,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  logo: {
    width: "70%",
    height: 110,
  },

  btn: {
    backgroundColor: "#343541",
    width: "90%",
    height: 72,
    borderRadius: 36,
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 26,
  },
});
