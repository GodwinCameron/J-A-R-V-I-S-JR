import { Image, StyleSheet, Alert, Platform, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
} from "react-native-reanimated";
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import OpenAI from "openai";
import { Audio } from "expo-av";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { recordSpeech } from "@/functions/recordSpeech";
import { transcribeSpeech } from "@/functions/transcribeSpeech";



export function JARVISInteractComponent() {


  // speech conts:
  const [isRecording, setIsRecording] = useState(false);
  const audioRecordingRef = useRef(new Audio.Recording());

  const [transcription, setTranscription] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);

  const startRecording = async () => {
    setIsRecording(true);
    await recordSpeech(audioRecordingRef);
  }

  const stopRecording = async () => {
    console.log("Stopped recording...");
    setIsRecording(false);
    setIsTranscribing(true);
    try{
      const speechTranscription = await transcribeSpeech(audioRecordingRef);
      setTranscription(speechTranscription || "");
    } catch (error) {
      console.error("Failed to stop recording", error);
    } finally {
      setIsTranscribing(false);
    }
  }

  // Animation things:
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withTiming(360, { duration: 20000, easing: Easing.linear }),
    -1 // Infinite repeat
  );
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));
  

  const HandleJarvisQuery = () => {
    console.log("Jarvis is listening...");
  };

  return (
    <TouchableOpacity onPressIn={startRecording} onPressOut={stopRecording}>
      {
        <Animated.View style={animatedStyle}>
          <Image
            style={{...styles.JarvisOrb, opacity: isRecording ? 0.2 : 1}}
            source={require("../assets/tempOrb.png")}
          />
        </Animated.View>
      }
      
    </TouchableOpacity>
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
