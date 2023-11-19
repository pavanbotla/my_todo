# Todo list app | Test task

## App view

<img src="./TODO_LIST/assets/todo_list.gif" width="305" height="650">

## Implementation of the project

- The project was compiled with [npx create-expo-app Todo_list](https://reactnative.dev/docs/environment-setup).
- Components are created using the library
  "@react-native-async-storage/async-storage", "@react-navigation/native-stack","@react-native-picker/picker", "@reduxjs/toolkit"
- State management libraries used "reduxjs/toolkit". All the necessary data for the correct operation of the application
   stored in `localStorage`

### Implemented:

1. Home Page:
A Home page with a button that links to the ToDo list.

2. ToDo List Page:
The Todo List page displays a list of tasks, the selected day, and the filter status. Users can toggle the status of a task and delete it.

2. Add New Task Page:
The Add New Task page displays a form for creating a new task. It includes fields for the task name, date, time, category, and notes.
