import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/taskSlice";
import { CheckBox } from "react-native-elements";
import IconGoal from "../SvgIcon/IconGoal.js";
import IconEvent from "../SvgIcon/IconEvent";
import IconTask from "../SvgIcon/IconTask";
import { useNavigation } from "@react-navigation/native";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <View style={styles.container}>
      <View
        style={{
          opacity: task.completed === true ? 0.5 : 1,
        }}
      >
        <View style={styles.containerTask}>
          {task.category === "Event" && <IconEvent width={24} height={24} />}
          {task.category === "Task" && <IconTask width={24} height={24} />}
          {task.category === "Goal" && <IconGoal width={24} height={24} />}
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Notes", {
                  text: task.text,
                  notes: task.notes,
                })
              }
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  textDecorationLine:
                    task.completed === true ? "line-through" : "none",
                  width: 125,
                }}
              >
                {task.text}
              </Text>
              <Text
                style={{
                  textDecorationLine:
                    task.completed === true ? "line-through" : "none",
                }}
              >
                {task.time}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button title="Delete" color="red" onPress={handleDelete} />
      <CheckBox
        checked={task.completed}
        onPress={handleToggle}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        uncheckedColor="#4A3780"
        checkedColor="#4A3780"
        size={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    padding: 16,
  },
  containerTask: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
