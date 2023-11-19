import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./src/redux/store";
import Navigation from "./src/Navigation.jsx";
import { StatusBar, Text } from "react-native";

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <StatusBar hidden={true} />
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
