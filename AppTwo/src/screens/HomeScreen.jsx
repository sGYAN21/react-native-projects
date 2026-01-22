import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import image1 from "../assets/destination/destination1.png";
import image2 from "../assets/destination/destination2.png";
import icon from "../assets/Menu/Icon.png";
import avatar from "../assets/avatar.png";
import location from "../assets/Location/Location.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profile}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.username}>Leonardo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Explore the</Text>
        <Text style={styles.subtitle}>
          Beautiful <Text style={styles.highlight}>world!</Text>
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Destination</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Image source={image1} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Niladri Reservoir</Text>
          <View style={styles.locationRow}>
            <Image source={location} style={styles.locationIcon} />
            <Text style={styles.locationText}>Tekerghat, Sunamgnj</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={image2} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Darma Valley</Text>
          <View style={styles.locationRow}>
            <Image source={location} style={styles.locationIcon} />
            <Text style={styles.locationText}>Uttarakhand</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 25,
    // marginRight: 15,
    paddingLeft:25,
    paddingRight:15,
  
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    // backgroundColor:'grey'
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F9",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 22,
  },

  avatar: {
    width: 37,
    height: 37,
    // borderRadius: 16,
    marginRight: 8,
  },

  username: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1B1E28",
  },

  iconBtn: {
    backgroundColor: "#F7F7F9",
    height: 44,
    width: 44,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 42,
    height: 42,
  },

  titleWrapper: {
    marginTop: 25,
  },

  title: {
    fontSize: 38,
    fontWeight: "300",
    color: "#333",
    lineHeight: 50,
  },

  subtitle: {
    fontSize: 38,
    fontWeight: "bold",
    lineHeight: 50,
  },

  highlight: {
    color: "#FF6B2C",
    lineHeight: 50,
    fontWeight: "semibold",
  },

  sectionHeader: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1B1E28",
    lineHeight: 28,
  },

  viewAll: {
    color: "#0D6EFD",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
  },

  card: {
    width: 268,
    height: 384,
    backgroundColor: "#fff",
    borderRadius: 24,
    marginRight: 15,
    marginTop: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 4,
  },

  cardImage: {
    width: 240,
    height: 286,
    borderRadius: 20,
  },

  cardTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 24,
    color: "#1B1E28",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  locationIcon: {
    width: 12,
    height: 13.3,
    marginRight: 4,
    borderRadius: 1.5,
    color: "#7D848D",
  },

  locationText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#7D848D",
  },
});
