import React from "react";
import { StyleSheet, View } from "react-native";
import { TaskFillForm } from "../../components/TaskFillForm/TaskFillForm";

export default function NewTask() {
  return (
    <View style={styles.container}>
      <TaskFillForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
});
