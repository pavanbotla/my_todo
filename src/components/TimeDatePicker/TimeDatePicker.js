import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { format } from "date-fns";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import IconCalendar from "../SvgIcon/IconCalendar";
import IconClock from "../SvgIcon/IconClock";

export default function TimeDatePicker({
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    hideTimePicker();
    setSelectedTime(time);
  };

  return (
    <View style={styles.containerDateTime}>
      <View>
        <Text style={styles.titleCategory}>Date</Text>
        <View style={styles.inputDate}>
          <TextInput
            placeholder="Selected Date"
            editable={false}
            value={selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}
          />
          <TouchableOpacity onPress={showDatePicker}>
            <IconCalendar />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
      <View>
        <Text style={styles.titleCategory}>Time</Text>
        <View style={styles.inputDate}>
          <TextInput
            placeholder="Selected Time"
            editable={false}
            value={selectedTime ? format(selectedTime, "hh:mm a") : ""}
          />
          <TouchableOpacity onPress={showTimePicker}>
            <IconClock />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputDate: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFF",
    borderRadius: 6,
    padding: 8,
    width: 165,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleCategory: {
    color: "#1B1B1D",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 15.4,
    fontStyle: "normal",
    paddingBottom: 8,
  },
  containerDateTime: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 24,
    gap: 8,
  },
});
