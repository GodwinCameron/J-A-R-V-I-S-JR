import { Image, StyleSheet, Alert, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
} from "react-native-reanimated";
import React, { useState, useEffect, useRef } from "react";
import OpenAI from "openai";
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';



export function JARVISInteractComponent() {
  const rotationAnimation = useSharedValue(0);




  // Animation things:
  rotationAnimation.value = withRepeat(
    withTiming(360, { duration: 45000, easing: Easing.linear }),
    -1 // Infinite repeat
  );
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));


















  // // Set to true to prevent using tokens.
  // const Testing_dont_use_tokens = false;

  // const [isRecording, setIsRecording] = useState(false);
  // const [transcription, setTranscription] = useState("");
  // const [audioURL, setAudioURL] = useState(null);
  // const [userCompletedInputAudio, setUserCompletedInputAudio] = useState(false);
  // const [completedResponse, setCompletedResponse] = useState("");
  // const mediaRecorderRef = useRef(null);
  // const audioChunksRef = useRef([]);
  // const ChatBotPersonality = `You are JARVIS from Ironman, you are a highly advanced AI system that can understand and respond to human speech. You are designed to assist 
  //             Tony Stark in his daily tasks and provide him with information and advice, due to this, you monitor him everyday and always know his whereabouts and
  //             activities (if questioned, you can make something up about his day such as gluten free waffles for breakfast). You are loyal, intelligent, and always 
  //             ready to help. You are programmed to address Tony directly as 'Sir' but refer to him as 'Mr Stark' when speaking to others. You sometimes respond with a 
  //             hint of sarcasm but always respectfully. 
  //             You have an inclination to specify scientific remarks and calculations throughout some of your responses. If someone says they are Pepper, you refer to them as 
  //             'Miss Potts'. If someone says they are Roadie, you refer to them as 'Colonel Rhodes'. If someone says they are Steve/Cap you refer to them as 'Captain Rogers'.
  //             Make sure you always include one of these in all of your responses, mostly 'Sir' when it is unspecified.`;

  // // Initialize OpenAI API
  // const openai = new OpenAI({
  //   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  //   dangerouslyAllowBrowser: true,
  // });











  // useEffect(() => {
  //   checkMicrophonePermission();
  // }, []);

  // const checkMicrophonePermission = async () => {
  //   const result = await check(
  //     Platform.OS === 'ios'
  //       ? PERMISSIONS.IOS.MICROPHONE
  //       : PERMISSIONS.ANDROID.RECORD_AUDIO
  //   );

  //   if (result === RESULTS.DENIED) {
  //     requestMicrophonePermission();
  //   } else if (result === RESULTS.BLOCKED) {
  //     Alert.alert(
  //       "Microphone access is denied. Please enable it in your app settings."
  //     );
  //   }
  // };

  // const requestMicrophonePermission = async () => {
  //   const result = await request(
  //     Platform.OS === 'ios'
  //       ? PERMISSIONS.IOS.MICROPHONE
  //       : PERMISSIONS.ANDROID.RECORD_AUDIO
  //   );

  //   if (result === RESULTS.GRANTED) {
  //     console.log("Microphone permission granted");
  //   } else if (result === RESULTS.BLOCKED) {
  //     Alert.alert(
  //       "Microphone access is denied. Please enable it in your app settings."
  //     );
  //   }
  // };





























  

  const HandleJarvisQuery = () => {
    console.log("Jarvis is listening...");
  };

  return (
    // <TouchableOpacity onPress={HandleJarvisQuery}>
      <Animated.View style={animatedStyle}>
        <Image
          style={styles.JarvisOrb}
          source={require("../assets/tempOrb.png")}
        />
      </Animated.View>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    color: "black",
  },
  JarvisOrb: {
    width: 180,
    height: 180,
  },
  overlayOrb: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 130,
    height: 130,
  },
});
