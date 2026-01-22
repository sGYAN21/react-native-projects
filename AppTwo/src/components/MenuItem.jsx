import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import arrowRight from "../assets/icons/arrow-right.png";

export const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <Image source={icon} style={styles.menuIcon} />
      <Text style={styles.menuText}>{title}</Text>
    </View>
    <Image source={arrowRight} style={styles.arrow} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
   menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#B4BCC91F",
    
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap:5
  },

  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },

  menuText: {
    fontSize: 16,
    lineHeight:20,
    letterSpacing:0.5,
    fontWeight:500,
    color: "#1B1E28",
  },

  arrow: {
    width: 16,
    height: 16,
  },
})