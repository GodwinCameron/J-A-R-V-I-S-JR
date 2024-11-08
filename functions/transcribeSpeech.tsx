import { Audio } from "expo-av";
import { MutableRefObject } from "react";
import * as FileSystem from "expo-file-system";
import OpenAI from "openai";
import { Platform } from "react-native";
import { EXPO_OPENAI_API_KEY } from "@env";

export const transcribeSpeech = async (
  audioRecordingRef: MutableRefObject<Audio.Recording>
) => {
  const Testing_dont_use_tokens = false;

  const transcribeAudio = async (recordingUri: string) => {
    // Initialize OpenAI API
    const openai = new OpenAI({
      apiKey: EXPO_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    if (!Testing_dont_use_tokens) {
      // Create a FormData object and append the audio file
      const formData = new FormData();
      const file = await FileSystem.readAsStringAsync(recordingUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const fileName = "audio_recording.wav";
      const fileType = Platform.OS === "ios" ? "audio/wav" : "audio/amr";
      const file2 = new File([file], fileName, { type: fileType, lastModified: Date.now() });
      formData.append("file", file);

      try {
        // Transcribe using OpenAI API with FormData
        const response = await openai.audio.transcriptions.create({
          file: file2,
          model: "whisper-1",
          response_format: "text",
        });
        return response;
      } catch (error) {
        console.error("Transcription error:", error);
        throw error;
      }
    } else {
      return "This is a test transcription.";
    }
  };

  // Set audio mode and stop recording if prepared
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: true,
    playsInSilentModeIOS: true,
  });

  const isPrepared = audioRecordingRef?.current?._canRecord;
  if (isPrepared) {
    await audioRecordingRef?.current?.stopAndUnloadAsync();

    const recordingUri = audioRecordingRef?.current?.getURI() || "";

    if (recordingUri) {
      transcribeAudio(recordingUri)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Failed to transcribe audio", error);
        });
    } else {
      console.error("Recording URI not found");
      return undefined;
    }
  } else {
    console.error("Audio recording not prepared");
    return undefined;
  }
};
