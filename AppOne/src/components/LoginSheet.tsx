import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useEffect, useRef } from "react";
import googleLogo from "../assets/logo/google-logo.png";
import account1 from "../assets/accounts/account1.png";
import account2 from "../assets/accounts/account2.png";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get("window");



const accounts = [
  {
    id: "1",
    email: "giciex557@adosnan.com",
    name: "Elon Musk",
    avatar: account1,
  },
  {
    id: "2",
    email: "mgv1ehi22@knmcadibav.com",
    name: "Ratan Tata",
    avatar: account2,
  },
];

interface LoginSheetProps {
  visible: boolean;
  onClose: () => void;
}
const LoginSheet: React.FC<LoginSheetProps>=({ visible, onClose }) => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const closeSheet = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 250,
      useNativeDriver: true,
    }).start(onClose);
  };

  return (
    <Modal transparent visible={visible}>
      <TouchableOpacity style={styles.overlay} onPress={closeSheet} />

      <Animated.View
        style={[styles.sheet, { transform: [{ translateY: slideAnim }] }]}
      >
        <View style={styles.googleRow}>
          <Image source={googleLogo} style={styles.googleIcon} />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </View>

        <Text style={styles.title}>Choose an account</Text>
        <Text style={styles.subtitle}>to continue to Gemini</Text>

        {accounts.map((account) => (
          <TouchableOpacity key={account.id} onPress={()=>navigation.navigate('Chat')} style={styles.account}>
            <Image source={account.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.email}>{account.email}</Text>
              <Text style={styles.name}>{account.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </Modal>
  );
};

export default LoginSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical:30
  },

  googleRow: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    gap: 4,
    marginBottom: 12,
  },

  googleIcon: {
    width: 35,
    height: 35,
  },

  googleText: {
    fontSize: 13,
    color: "#343541",
    textDecorationLine: "underline",
    lineHeight: 16,
    fontWeight: "400",
  },

  title: {
    fontSize: 25,
    fontWeight: "300",
    textAlign: "center",
    color: "#1B1B1B",
    marginTop: 8,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 16,
  },

  account: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00000033",
    borderRadius: 50,
    padding: 12,
    marginBottom: 12,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 15,
  },

  email: {
    fontSize: 16,
    fontWeight: "500",
    color:'#000',
  },

  name: {
    fontSize: 13,
    color: "#343541CC",
    fontWeight:'500',
  },
});
