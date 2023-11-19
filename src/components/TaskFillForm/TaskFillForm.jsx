import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { format } from "date-fns";
import IconClose from "../SvgIcon/IconClose";
import IconEvent from "../SvgIcon/IconEvent";
import IconGoal from "../SvgIcon/IconGoal";
import IconTask from "../SvgIcon/IconTask";
import { useNavigation } from "@react-navigation/native";
import StyledButton from "../Button/StyledButton";
import TimeDatePicker from "../TimeDatePicker/TimeDatePicker";

export const TaskFillForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [text, setText] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Event");

  const handleSubmit = () => {
    if (text !== "" && selectedDate && selectedTime) {
      const formattedDate = format(selectedDate, "MMMM d, yyyy");
      const formattedTime = format(selectedTime, "hh:mm a");

      dispatch(
        addTask(text, formattedDate, formattedTime, selectedCategory, notes)
      );
      setText("");
      setNotes("");
      setSelectedDate(null);
      setSelectedTime(null);
      setSelectedCategory("Event");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <ImageBackground
              source={require("../../../assets/HeaderTask.png")}
              style={styles.backgroundImage}
            >
              <View style={styles.containerHeader}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("TodoList")}
                >
                  <IconClose />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Add New Task</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerMain}>
            <View>
              <Text style={styles.titleCategory}>Task Title</Text>
              <TextInput
                value={text}
                onChangeText={(newText) => setText(newText)}
                placeholder="Task Title"
                style={styles.input}
              />
            </View>
            <View style={styles.containerCategory}>
              <Text style={styles.titleCategory}>Category</Text>
              <TouchableOpacity onPress={() => setSelectedCategory("Event")}>
                <IconEvent />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedCategory("Goal")}>
                <IconGoal />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedCategory("Task")}>
                <IconTask />
              </TouchableOpacity>
            </View>
            <View>
              <TimeDatePicker
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            </View>
            <View>
              <View>
                <Text style={styles.titleCategory}>Notes</Text>
                <TextInput
                  value={notes}
                  onChangeText={(newText) => setNotes(newText)}
                  placeholder="Notes"
                  multiline={true}
                  style={styles.inputNotes}
                />
              </View>
            </View>
            <View style={styles.containerButton}>
              <StyledButton title="Save" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 6,
  },
  inputNotes: {
    height: 150,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 6,
  },
  titleCategory: {
    color: "#1B1B1D",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 15.4,
    fontStyle: "normal",
    paddingBottom: 8,
  },
  containerCategory: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: 24,
    paddingBottom: 24,
  },
  backgroundImage: {
    width: "100%",
    height: 96,
    display: "flex",
    justifyContent: "center",
  },
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 76,
    paddingLeft: 16,
  },
  containerMain: {
    width: "90%",
    alignSelf: "center",
    paddingTop: 24,
  },
  textHeader: {
    color: "#FFF",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 24,
  },
  categoryPicker: {
    width: 120,
    alignSelf: "center",
  },
  containerButton: {
    paddingTop: 35,
    alignSelf: "center",
  },
});
