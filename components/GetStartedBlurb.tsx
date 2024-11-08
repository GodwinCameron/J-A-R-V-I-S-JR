import { StyleSheet, Text, View } from "react-native";


const GetStartedBlurb = () => {

    return(
        <View style={styles.textBox}>
            <Text style={styles.text}>
                Welcome to J.A.R.V.I.S.JR!
                Press on the orb below to begin.
            </Text>
        </View>
    );
}

// stylesheet create
const styles = StyleSheet.create({
    text: {
      fontSize: 9,
      color: "#01F4FF",
    },
    textBox: {
      marginTop: 70,
      backgroundColor: "#000000",
      borderRadius: 4,
      padding: 10,
      margin: 10,
      minWidth: 300,
      borderWidth: 1,
      borderColor: "#01F4FF",
    }
  });



export default GetStartedBlurb;