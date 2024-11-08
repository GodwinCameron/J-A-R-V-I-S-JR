import AudioTester from "@/components/AudioTester";
import { JARVISInteractComponent } from "@/components/JARVISInteractComponent";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import GetStartedBlurb from "./GetStartedBlurb";
import { LinearGradient } from "expo-linear-gradient";

const MainScreenComponent = () => {
  const [showJarvisInfo, setShowJarvisInfo] = useState(false);
  const [getStarted, setGetStarted] = useState(true);


  const showOptions = () => {
    setShowJarvisInfo(!showJarvisInfo);
    setGetStarted(false);
  };


  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <LinearGradient
        colors={["rgba(53,247,251,0.2)", "transparent"]}
        style={{
          height: 200,
          width: 10000,
        }}
      ></LinearGradient>
      {getStarted && <GetStartedBlurb />}
      <TouchableOpacity onPress={showOptions}>
        <JARVISInteractComponent />
      </TouchableOpacity>
      {showJarvisInfo && (
        <View style={styles.jarvisInfo}>
          <View style={styles.chatBox}>
            <Text style={styles.title}>How can I help you today?</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; All systems nominal, awaiting
              request...
            </Text>
            <Text style={styles.text}>Ask your query...</Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; I need help with my Science homework.
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              Running physics emulator now, would you like to trail some
              iterations, Sir?
            </Text>
            <Text>...</Text>
          </View>
          {/* End of chatbox */}
          <TouchableOpacity style={styles.options}>
            <Text style={styles.text}>
              &#47;&#47;&#47; &#61; &#62; Documentation
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {/* End of info section */}
      <Text style={styles.systemText2}>
        V 1 . 0. J.A.R.V.I.S.JR - ~Stark Industries
      </Text>
      <LinearGradient
        colors={["transparent", "rgba(53,247,251,0.2)"]}
        style={{
          height: 200,
          width: 10000,
        }}
      ></LinearGradient>
    </View>
  );
};

// stylesheet create
const styles = StyleSheet.create({
  jarvisInfo: {
    padding: 10,
    margin: 10,
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 12,
    lineHeight: 32,
    marginTop: -6,
    color: "#01F4FF",
  },
  spacer: {
    height: 100,
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
    marginTop: 150,
  },
  text: {
    fontSize: 9,
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
    marginTop: 70,
    backgroundColor: "#000000",
    borderRadius: 4,
    padding: 10,
    margin: 10,
    minWidth: 300,
    borderWidth: 1,
    borderColor: "#01F4FF",
  },

  options: {
    borderRadius: 4,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#01F4FF",
  },
});

export default MainScreenComponent;
