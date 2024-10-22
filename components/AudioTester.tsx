import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const AudioRecorderComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPath, setAudioPath] = useState('');
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const startRecording = async () => {
    setIsRecording(true);
    const path = 'your_file_path.m4a'; // Customize this path as needed
    const audioSet = {
        AudioEncoderAndroid: 3,   // 'aac' encoder on Android corresponds to 3
        AudioSourceAndroid: 1,    // 'mic' source on Android corresponds to 1
        AVFormatIDKeyIOS: 1633772320, // Use iOS audio format key for AAC (kAudioFormatMPEG4AAC)
      };
    // const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    // setAudioPath(uri);
  };

  const stopRecording = async () => {
    const uri = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);
    setAudioPath(uri); // This will be the path to your recorded audio
  };

  return (
    <View>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />
      {audioPath ? <Text>Recorded File: {audioPath}</Text> : null}
    </View>
  );
};

export default AudioRecorderComponent;