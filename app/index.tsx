import AudioTester from "@/components/AudioTester";
import DocumentationComponent from "@/components/DocumentationComponent";
import { JARVISInteractComponent } from "@/components/JARVISInteractComponent";
import MainScreenComponent from "@/components/MainScreenComponent";
import PastConversationsArchiveComponent from "@/components/PastConversationsArchiveComponent";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

const Index = () => {
  return (

    <MainScreenComponent />
    // <DocumentationComponent />
    // <PastConversationsArchiveComponent />

  );
};

// TODO:
// Finish audio functionality ********


// Fix file structure
// create more and better sub components (like messages)

export default Index;
