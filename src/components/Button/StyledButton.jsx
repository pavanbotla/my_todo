import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const StyledButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: 358,
    height: 56,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    flexShrink: 0,
    borderRadius: 50,
    backgroundColor: "#4A3780",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 24,
  },
});

export default StyledButton;
