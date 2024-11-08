import { Audio } from "expo-av";
import { MutableRefObject } from "react";

export const recordSpeech = async (audioRecordingRef: MutableRefObject<Audio.Recording>) => {
    try {
        console.log("Recording...");
        
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const doneRecording = audioRecordingRef?.current?._isDoneRecording;
      if (doneRecording) audioRecordingRef.current = new Audio.Recording();

      const permissionResponse = await Audio.requestPermissionsAsync();
      if (permissionResponse.status === "granted") {
        const recordingStatus = await audioRecordingRef?.current?.getStatusAsync();
        if (!recordingStatus?.canRecord){
          const recordingOptions  = {
            ...Audio.RecordingOptionsPresets.HIGH_QUALITY,
            android: {
              extension: ".amr",
              outputFormat: Audio.AndroidOutputFormat.AMR_WB,
              audioEncoder: Audio.AndroidAudioEncoder.AMR_WB,
              sampleRate: 16000,
              numberOfChannels: 1,
              bitRate: 128000,
            },
            ios: {
              extension: ".wav",
              audioQuality: Audio.IOSAudioQuality.HIGH,
              sampleRate: 44100,
              numberOfChannels: 1,
              bitRate: 128000,
              linearPCMBitDepth: 16,
              linearPCMIsBigEndian: false,
              linearPCMIsFloat: false,
            }
          };
          // MUST MATCH AUDIO ENCODING FORMAT, AS WELL AS SAMPLE RATE AND CHANNELS WITH OPENAI API ******************************
          await audioRecordingRef?.current?.prepareToRecordAsync(recordingOptions)
          .then(() => console.log("Prepared to record"))
          .catch((error) => console.error("Failed to prepare recording", error));
        }
        await audioRecordingRef?.current?.startAsync();
      } else {
        console.error("Microphone permission not granted");
        return;
      }

    } catch (error) {
      console.error("Failed to start recording", error);
    }
  };