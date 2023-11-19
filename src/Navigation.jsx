import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home/Home";
import TodoList from "./Screens/TodoList/TodoList";
import NewTask from "./Screens/NewTask/NewTask";
import Notes from "./Screens/Notes/Notes";

const MainStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="TodoList" component={TodoList} />
        <MainStack.Screen name="Notes" component={Notes} />
        <MainStack.Screen name="NewTask" component={NewTask} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
