import AudioTester from "@/components/AudioTester";
import { JARVISInteractComponent } from "@/components/JARVISInteractComponent";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";


const PastConversationsArchiveComponent = () => {
    const [windowStlye, setWindowStyle] = useState("desktop");

    useEffect(() => {
      if (Platform.OS === "android") {
        setWindowStyle("mobile");
      }
    }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <LinearGradient
        colors={['rgba(53,247,251,0.2)', 'transparent']}
        style={{
          height: 100,
          width: 10000,
        }}></LinearGradient>
      <Text style={styles.title2}>Chat Archives</Text>

      <View style={styles.spacer} />

      {windowStlye === "desktop" && (
        <View style={styles.jarvisInfo}>
          <View style={styles.chatBox}>
            <Text style={styles.title}>Chat Holotape retreived</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 20th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; I can't even remember what I had for breack fast.
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>Gluten free waffles, Sir.</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>&#62; That's right.</Text>
          </View>

          <View style={styles.chatBox}>
            <Text style={styles.title}>Chat Holotape retreived</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 18th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; Jarvis, what's the weather like today?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              Weather is sunny with a high of 78 degrees, Sir.
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>&#62; Can you drop my needle?</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              What would you like to listen to, Sir?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>&#62; Something nestaigic.</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              Playing your favorite playlist, Sir.
            </Text>
          </View>

          <View style={styles.chatBox}>
            <Text style={styles.title}>Chat Holotape retreived</Text>

            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 16th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; Why won't this system emulate?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              Sir, Perhaps it's the Nuclear Atomizer failing again.
            </Text>
            <Text>...</Text>
          </View>

          <View style={styles.chatBox}>
            <Text style={styles.title}>Chat Holotape retreived</Text>

            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 9th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; Know the formula for avagadro's constant in a vacuum?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>6.02214076 x 10^23, Sir.</Text>
            <Text>...</Text>
          </View>
        </View>
      )}

      {windowStlye === "mobile" && (
        <ScrollView style={styles.jarvisInfo2}>
          <View style={styles.chatBox2}>
            <Text style={styles.title}>Chat Holotape retreived</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 20th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; I can't even remember what I had for breack fast.
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>Gluten free waffles, Sir.</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>&#62; That's right.</Text>
          </View>

          <View style={styles.chatBox2}>
            <Text style={styles.title}>Chat Holotape retreived</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 18th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; Jarvis, what's the weather like today?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              Weather is sunny with a high of 78 degrees, Sir.
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>&#62; Can you drop my needle?</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              What would you like to listen to, Sir?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>&#62; Something nestaigic.</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              Playing your favorite playlist, Sir.
            </Text>
          </View>

          <View style={styles.chatBox2}>
            <Text style={styles.title}>Chat Holotape retreived</Text>

            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 16th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; Why won't this system emulate?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>
              Sir, Perhaps it's the Nuclear Atomizer failing again.
            </Text>
            <Text>...</Text>
          </View>

          <View style={styles.chatBox2}>
            <Text style={styles.title}>Chat Holotape retreived</Text>

            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Data retrieval successful...
            </Text>
            <Text style={styles.text}>
              {"          "} - Recorded in 2024 on May 9th ...
            </Text>
            <Text>...</Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.userText}>
              &#62; Know the formula for avagadro's constant in a vacuum?
            </Text>
            <Text>...</Text>
            <Text style={styles.systemText}>
              &#47;&#47;&#47; &#61; &#62; Conversation transcription:
            </Text>
            <Text style={styles.jarvisText}>6.02214076 x 10^23, Sir.</Text>
            <Text>...</Text>
          </View>
        </ScrollView>
      )}

      <Text style={styles.systemText2}>
        V 1 . 0 . J.A.R.V.I.S.JR - ~Stark Industries
      </Text>
      <LinearGradient
        colors={['transparent','rgba(53,247,251,0.2)']}
        style={{
          height: 100,
          width: 10000,
        }}></LinearGradient>
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
    gap: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  jarvisInfo2: {
    minHeight: 500,
    padding: 10,
  },

  title: {
    fontSize: 12,
    lineHeight: 32,
    marginTop: -6,
    color: "#01F4FF",
  },
  title2: {
    fontSize: 30,
    lineHeight: 32,
    marginTop: 35,
    color: "#01F4FF",
  },
  spacer: {
    height: 20,
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
    marginTop: 10,
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
    margin: -20,
    backgroundColor: "#000000",
    borderRadius: 4,
    padding: 10,
    width: 300,
    minHeight: 500,
    borderWidth: 1,
    borderColor: "#01F4FF",
    marginBottom: 40,
  },
  chatBox2: {
    borderRadius: 4,
    padding: 10,
    width: 350,
    borderWidth: 1,
    borderColor: "#01F4FF",
    marginBottom: 40,
    backgroundColor: "#000000",
  },
});

export default PastConversationsArchiveComponent;
