import {StyleSheet,Text,View,Image,TextInput,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import menuIcon from "../assets/icons/menu.png";
import historyIcon from "../assets/icons/history.png";
import profileIcon from "../assets/icons/profile.png";
import uploadingIcon from "../assets/icons/uploading.png";
import micIcon from "../assets/icons/mic.png";
import attachIcon from "../assets/icons/attach.png";
import dropdownIcon from "../assets/icons/dropdown.png";
import closeIcon from "../assets/icons/close.png";
import GradientText from "../components/GradientText";
const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={menuIcon}
            style={[styles.icon, { height: 14, width: 20 }]}
          />
          <Text style={styles.headerTitle}>Gemini</Text>
          <Image
            source={dropdownIcon}
            style={[styles.icon, { height: 8, width: 9 }]}
          />
        </View>

        <View style={styles.headerRight}>
          <Image source={historyIcon} style={styles.headerIcon} />
          <Image source={profileIcon} style={styles.headerIcon} />
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          Gemini was just updated. <Text style={styles.link}>See update</Text>
        </Text>
        <Image source={closeIcon} />
      </View>

      <View style={styles.center}>
        <GradientText text="Hello, Daksh" style={styles.greeting} />
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Ask Gemini"
            placeholderTextColor="#49454F"
            style={styles.input}
          />
          <Image source={uploadingIcon} style={styles.inputIcon} />
          <Image source={attachIcon} style={styles.inputIcon} />
          <Image source={micIcon} style={styles.inputIcon} />
        </View>
        <Text style={styles.footerText}>
          Gemini can make mistakes, so double-check it.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  headerRight: {
    flexDirection: "row",
    gap: 25,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "400",
  },
  headerIcon: {
    width: 22,
    height: 22,
    tintColor: "#fff",
  },

  icon: {
    width: 22,
    height: 22,
    tintColor: "#fff",
  },


  banner: {
    backgroundColor: "#343541",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    gap: 10,
  },

  bannerText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  greeting: {
    fontSize: 55,
    fontWeight: "400",
    lineHeight: 64,
  },

  link: {
    textDecorationLine: "underline",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    paddingHorizontal: 14,
    paddingBottom: 12,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECE6F0",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },

  inputIcon: {
    width: 18,
    height: 18,
    tintColor: "#000",
    marginHorizontal: 10,
  },

  footerText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight:400,
    color: "#919191",
    marginTop: 8,
  },
});
