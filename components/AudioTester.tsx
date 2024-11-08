import React from "react";
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const requestAudioPermission = async () => {
  console.log("requesting permissions...");
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Audio Permission",
        message:
          "Jarvis jr wants to access your audio recording capabilities to communicate with you ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    console.log("Request RECORD_AUDIO result: ",PermissionsAndroid.RESULTS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can record audio");
    } else {
      console.log("audio recording permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestFileWritingPermission = async () => {
  console.log("requesting permissions...");
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Write External Permission",
        message:
          "Jarvis jr wants to access your audio recording capabilities to communicate with you ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    console.log("Request WRITE_EXTERNAL_STORAGE result: ",PermissionsAndroid.RESULTS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can Write external storage");
    } else {
      console.log("permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestFileReadingPermission = async () => {
  console.log("requesting permissions...");
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Read External Permission",
        message:
          "Jarvis jr wants to access your audio recording capabilities to communicate with you ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    console.log("Request READ_EXTERNAL_STORAGE result: ",PermissionsAndroid.RESULTS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can Read external storage");
    } else {
      console.log("permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

// console.log("requesting permissions...");
//   try {
//     const granted = await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//     ]);
//     if (
//       granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
//         PermissionsAndroid.RESULTS.GRANTED &&
//       granted["android.permission.READ_EXTERNAL_STORAGE"] ===
//         PermissionsAndroid.RESULTS.GRANTED &&
//       granted["android.permission.RECORD_AUDIO"] ===
//         PermissionsAndroid.RESULTS.GRANTED
//     ) {
//       console.log("You can record audio");
//     } else {
//       console.log("one or more permissions were denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }

const AudioTester = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try audio record permissions</Text>
    <Button title="request Audio Record permissions" onPress={requestAudioPermission} />
    <Text style={styles.item}>Try file write permissions</Text>
    <Button title="request File Write permissions" onPress={requestFileWritingPermission} />
    <Text style={styles.item}>Try file read permissions</Text>
    <Button title="request File Read permissions" onPress={requestFileReadingPermission} />

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AudioTester;
