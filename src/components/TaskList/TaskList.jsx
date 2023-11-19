import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import {
  getTasks,
  getStatusFilter,
  getSelectedData,
} from "../../redux/selectors";
import { statusFilters } from "../../redux/filterStatus";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const getVisibleTasks = (tasks, statusFilter, selectedDate) => {
  const convertToTime = (time) => {
    const [hours, minutes, period] = time
      .match(/(\d+):(\d+)\s?([APMapm]{2})/)
      .slice(1);
    const hours24 =
      period.toUpperCase() === "PM"
        ? parseInt(hours, 10) + 12
        : parseInt(hours, 10);
    return hours24 * 60 + parseInt(minutes, 10);
  };

  const compareTime = (a, b) => convertToTime(a.time) - convertToTime(b.time);

  switch (statusFilter) {
    case statusFilters.active:
      return tasks
        .filter((task) => !task.completed)
        .filter((task) => (selectedDate ? task.date === selectedDate : true))
        .sort((a, b) => {
          const dateComparison = a.date.localeCompare(b.date);
          return dateComparison !== 0 ? dateComparison : compareTime(a, b);
        });

    case statusFilters.completed:
      return tasks
        .filter((task) => task.completed)
        .filter((task) => (selectedDate ? task.date === selectedDate : true))
        .sort((a, b) => {
          const dateComparison = a.date.localeCompare(b.date);
          return dateComparison !== 0 ? dateComparison : compareTime(a, b);
        });

    default:
      return tasks
        .filter((task) => (selectedDate ? task.date === selectedDate : true))
        .sort((a, b) => {
          const dateComparison = a.date.localeCompare(b.date);
          return dateComparison !== 0 ? dateComparison : compareTime(a, b);
        });
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const selectedDate = useSelector(getSelectedData);
  const visibleTasks = getVisibleTasks(tasks, statusFilter, selectedDate);

  return (
    <ScrollView style={styles.container}>
      {visibleTasks.length === 0 ? (
        <Text style={styles.text}>There are no tasks for your</Text>
      ) : (
        visibleTasks.map((task) => (
          <View style={styles.item} key={task.id}>
            <Task task={task} />
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 158,
    height: 416,
  },
  item: {
    padding: 8,
  },
  text: {
    marginTop: 120,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
