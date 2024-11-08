import AudioTester from "@/components/AudioTester";
import { JARVISInteractComponent } from "@/components/JARVISInteractComponent";
import { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";


const DocumentationComponent = () => {
  // Animation things:
  const rotationAnimation = useSharedValue(0);
  rotationAnimation.value = withRepeat(
    withTiming(360, { duration: 25000, easing: Easing.linear }),
    -1 // Infinite repeat
  );
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));


  const [windowStlye, setWindowStyle] = useState("desktop");

    useEffect(() => {
      if (Platform.OS === "android") {
        setWindowStyle("mobile");
      }
    }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(53,247,251,0.2)', 'transparent']}
        style={{
          height: 100,
          width: 10000,
        }}></LinearGradient>
      <View style={styles.jorbcontainer}>
        <Animated.View style={animatedStyle}>
          <Image
            style={styles.JarvisOrb}
            source={require("../assets/tempOrb.png")}
          />
        </Animated.View>
      </View>
      {windowStlye === "mobile" ? (
      <ScrollView style={styles.chatBox2}>
        <Text style={styles.title}>
          Thanks for checking out my J.A.R.V.I.S.JR app!
        </Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text style={styles.text}>
          Hi! My name is Cameron, I'm the developer of this app inspired by
          Marvel Studio and Marvel Comics' Iron man - J.A.R.V.I.S.{" "}
        </Text>
        <Text style={styles.text}>
          I was tasked with creating an AI powered tool with an open brief
          format and thought what better way to pay homage to the Marvel
          Universe than to create a J.A.R.V.I.S. inspired AI assistant.
        </Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text style={styles.text}>
          You can view the GitHub here:{" "}
          <Text style={styles.githubLink}>
            https://github.com/GodwinCameron/J-A-R-V-I-S-JR
          </Text>
        </Text>
        <Text style={styles.text}>
          This is a passion project I made in 3rd year while studying at{" "}
          <Text style={styles.githubLink}>Open Window</Text>
        </Text>
      </ScrollView>
      ) : (
        <View style={styles.chatBox}>
        <Text style={styles.title}>
          Thanks for checking out my J.A.R.V.I.S.JR app!
        </Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text style={styles.text}>
          Hi! My name is Cameron, I'm the developer of this app inspired by
          Marvel Studio and Marvel Comics' Iron man - J.A.R.V.I.S.{" "}
        </Text>
        <Text style={styles.text}>
          I was tasked with creating an AI powered tool with an open brief
          format and thought what better way to pay homage to the Marvel
          Universe than to create a J.A.R.V.I.S. inspired AI assistant.
        </Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text style={styles.text}>
          You can view the GitHub here:{" "}
          <Text style={styles.githubLink}>
            https://github.com/GodwinCameron/J-A-R-V-I-S-JR
          </Text>
        </Text>
        <Text style={styles.text}>
          This is a passion project I made in 3rd year while studying at{" "}
          <Text style={styles.githubLink}>Open Window</Text>
        </Text>
      </View>
      )}
      {/* /* End of chatbox */}
      <Text style={styles.systemText2}>
        V 1 . 0. J.A.R.V.I.S.JR - ~Stark Industries
      </Text>
      <LinearGradient
        colors={['transparent','rgba(53,247,251,0.2)']}
        style={{
          height: 200,
          width: 10000,
        }}></LinearGradient>
    </View>
  );
};

// stylesheet create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  jorbcontainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  githubLink: {
    color: "#CBFDFF",
  },
  title: {
    fontSize: 25,
    lineHeight: 50,
    color: "#01F4FF",
  },
  systemText: {
    fontSize: 6,
    color: "#01F4FF",
  },
  systemText2: {
    fontSize: 11,
    fontFamily: "monospace",
    color: "#01F4FF",
    marginLeft: 1000,
  },
  text: {
    fontSize: 12,
    lineHeight: 30,
    color: "#01F4FF",
  },
  userText: {
    fontSize: 12,
    color: "#CBFDFF",
    fontStyle: "italic",
  },
  jarvisText: {
    fontSize: 12,
    color: "#01F4FF",
  },
  chatBox: {
    backgroundColor: "#000000",
    borderRadius: 4,
    minWidth: 1200,
    minHeight: 500,
    borderColor: "#01F4FF",
  },
  chatBox2: {
    backgroundColor: "#000000",
    borderRadius: 4,
    minHeight: 500,
    borderColor: "#01F4FF",
  },
  JarvisOrb: {
    width: 80,
    height: 80,
  },
});

export default DocumentationComponent;
