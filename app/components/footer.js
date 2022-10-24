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

export default function Footer() {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomButton}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/Icons/discover_light.png")}
        />
        <Text style={styles.textStyle}> Discover </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/Icons/heart_light.png")}
        />
        <Text style={styles.textStyle}> Matches </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/Icons/messages_light.png")}
        />
        <Text style={styles.textStyle}> DMs </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  part3: {
    backgroundColor: Themes.light.navigation,
    fontFamily: "Sydney",
    width: "100%",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    backgroundColor: Themes.light.navigation,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "13%",
    paddingBottom: "5%",
  },
  bottomButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
    position: "relative",
    resizeMode: "contain",
  },
  textStyle: {
    color: Themes.light.textSecondary,
    fontFamily: "Sydney",
    fontSize: 18,
  },
});
