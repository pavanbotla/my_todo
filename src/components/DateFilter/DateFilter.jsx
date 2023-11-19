import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { setSelectedDate } from "../../redux/filterSlice";
import { getSelectedData } from "../../redux/selectors";
import { format } from "date-fns";
import { View } from "react-native";

const DateFilter = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(getSelectedData);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = format(date, "MMMM d, yyyy");
    dispatch(setSelectedDate(formattedDate));
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.text}>{selectedDate}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingBottom: 28,
  },
  text: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 17.6,
    letterSpacing: 0.16,
    color: "#FFFFFF",
  },
});

export default DateFilter;
