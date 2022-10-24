import * as React from "react";
import {
  ImageBackground,
  Platform,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Themes } from "../../assets/Themes";

export default function Body() {
  return (
    <View style={styles.part2}>
      <ImageBackground
        style={[styles.imageSpecs, styles.shadowProp, { shadowOpacity: 0.2 }]}
        imageStyle={{ borderRadius: 10 }}
        source={require("../../assets/Profiles/mtl.jpg")}
      >
        <Text style={[styles.pictureText, { fontSize: 32 }]}>MTL</Text>
        <Text style={[styles.pictureText, { fontSize: 18, paddingTop: "75%" }]}>
          2 miles away
        </Text>
      </ImageBackground>
      <View style={[styles.voicePromptBox, styles.shadowProp]}>
        <Text style={{ fontFamily: "Sydney", fontSize: 20 }}>
          My hottest take
        </Text>
        <View style={styles.voicePrompt}>
          <TouchableOpacity style={{ alignSelf: "flex-start" }}>
            <Image
              style={{ width: 43, height: 43 }}
              source={require("../../assets/Icons/player_light.png")}
            />
          </TouchableOpacity>
          <Image
            style={{ width: "80%", height: "80%" }}
            source={require("../../assets/Icons/audio_waveform_light.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  part2: {
    paddingTop: "2%",
    backgroundColor: Themes.light.bg,
    width: "80%",
    flex: 1,
  },
  imageSpecs: {
    borderRadius: 30,
    resizeMode: "cover",
    width: "100%",
    aspectRatio: 1,
    marginBottom: "4%",
  },
  pictureText: {
    fontFamily: "Sydney",
    color: Themes.light.textSecondary,
    padding: "3%",
  },
  voicePromptBox: {
    padding: 20,
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 25,
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 25,
    marginBottom: "15%",
  },
  voicePrompt: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shadowProp: {
    shadowColor: Themes.light.shadows,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});
