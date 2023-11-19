import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../redux/filterStatus";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filterSlice";
import { Button, StyleSheet, View } from "react-native";

export default function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <>
      <View style={styles.containerFilter}>
        <Button
          title="All"
          color="white"
          selected={filter === statusFilters.all}
          onPress={() => handleFilterChange(statusFilters.all)}
        />
        <Button
          title="Active"
          color="white"
          selected={filter === statusFilters.active}
          onPress={() => handleFilterChange(statusFilters.active)}
        />
        <Button
          title="Completed"
          color="white"
          selected={filter === statusFilters.completed}
          onPress={() => handleFilterChange(statusFilters.completed)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerFilter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
