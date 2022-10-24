import AppLoading from "expo-app-loading";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Themes } from "./assets/Themes";
import Header from "./app/components/header";
import Body from "./app/components/body";
import Footer from "./app/components/footer";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    SydneyBold: require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});
