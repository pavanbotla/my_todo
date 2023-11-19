import React from "react";
import { StyleSheet, View } from "react-native";
import TodoNotes from "../../components/TodoNotes/TodoNotes";

export default function Notes() {
  return (
    <View style={styles.container}>
      <TodoNotes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
});
