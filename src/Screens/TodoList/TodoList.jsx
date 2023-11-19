import React from "react";
import { StyleSheet, View } from "react-native";
import { TaskList } from "../../components/TaskList/TaskList";
import StyledButton from "../../components/Button/StyledButton";
import { TaskListHeader } from "../../components/TaskListHeader/TaskListHeader";

export default function TodoList({ navigation }) {
  return (
    <View style={styles.container}>
      <TaskListHeader />
      <TaskList />
      <View style={styles.containerButton}>
        <StyledButton
          onPress={() => navigation.navigate("NewTask")}
          title="Add New Task"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  containerButton: {
    alignSelf: "center",
  },
});
