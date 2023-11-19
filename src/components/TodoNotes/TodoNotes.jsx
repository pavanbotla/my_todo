import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import IconBack from "../SvgIcon/IconBack";

export default function TodoNotes() {
  const navigation = useNavigation();
  const {
    params: { text, notes },
  } = useRoute();
  return (
    <View>
      <View>
        <ImageBackground
          source={require("../../../assets/HeaderTask.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("TodoList")}>
              <IconBack />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Notes</Text>
          </View>
        </ImageBackground>
      </View>
      <Text style={styles.textTitle}>Task Title</Text>
      <Text style={styles.textNotes}>{text}</Text>
      <Text style={styles.textTitle}>Notes</Text>
      <Text style={styles.textNotes}>{notes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 96,
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
    paddingLeft: 16,
  },
  textHeader: {
    color: "#FFF",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 24,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
  },
  textNotes: {
    fontSize: 18,
    fontWeight: 400,
    padding: 16,
  },
});
