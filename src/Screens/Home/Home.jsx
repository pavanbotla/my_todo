import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import StyledButton from "../../components/Button/StyledButton";

export default function Home({ navigation }) {
  return (
    <>
      <View>
        <ImageBackground
          source={require("../../../assets/HeaderTask.png")}
          style={styles.backgroundImage}
        >
          <Text style={styles.textHeader}>Home Page</Text>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <StyledButton
          onPress={() => navigation.navigate("TodoList")}
          title="Open Todo List"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    color: "#FFF",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 24,
  },
  backgroundImage: {
    width: "100%",
    height: 96,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
