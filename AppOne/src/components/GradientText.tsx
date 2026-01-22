import { Text, StyleSheet, TextStyle } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

type GradientTextProps={
  text:string;
  style?:TextStyle | TextStyle[];
}

const GradientText: React.FC<GradientTextProps>=({ text, style }) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.text, style]}>
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={["#688AE9", "#977CB2", "#C66D7B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.text, style, { opacity: 0 }]}>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;

const styles = StyleSheet.create({
  text: {
    fontSize: 55,
    fontWeight: "400",
  },
});
