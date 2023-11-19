import { ImageBackground, StyleSheet, Text, View } from "react-native";
import DateFilter from "../DateFilter/DateFilter";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import IconBack from "../SvgIcon/IconBack";
import StatusFilter from "../StatusFilter/StatusFilter";

export const TaskListHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/HeaderList.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.containerDate}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <IconBack />
          </TouchableOpacity>
          <DateFilter />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>My Todo List</Text>
        </View>
        <View>
          <StatusFilter />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: "98%",
  },
  containerText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  containerDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
    paddingLeft: 16,
  },
  backgroundImage: {
    width: "100%",
    height: 222,
  },
  text: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 30,
    letterSpacing: 0.16,
    color: "#FFFFFF",
  },
});
