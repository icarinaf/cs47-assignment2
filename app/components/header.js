import * as React from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Themes } from "../../assets/Themes";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/Icons/menu_light.png")}
        />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "SydneyBold", fontSize: 30, alignSelf: "center" }}
      >
        ensom
      </Text>
      <TouchableOpacity>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/Icons/sun.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.light.bg,
    marginTop: 20,
    marginBottom: 10,
    width: "80%",
    height: Platform.OS === "ios" ? 41 : 51,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "contain",
    height: 50,
    aspectRatio: 1,
  },
});
