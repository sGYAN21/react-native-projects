import { StyleSheet, Text, View } from "react-native";

export const StatItem = ({ title, value }) => (
  <View style={styles.statItem}>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);
    
const styles = StyleSheet.create({
   statItem: {
    alignItems: "center",
    flex: 1,
  },

  statTitle: {
    fontSize: 14,
    color: "#1B1E28",
    lineHeight:14,
    letterSpacing:0.5,
    fontWeight:600
  },

  statValue: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing:0.5,
    lineHeight:20,
    color: "#0D6EFD",
  },
})