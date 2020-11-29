import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import TextLink from "../components/TextLink";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: Constants.statusBarHeight,
    // alignContent: "space-between",
    backgroundColor: "#fff",
  },
  marginMedium: {
    margin: 10,
  },
  aboutTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  center: {
    textAlign: "center",
  },
  aboutText: {
    fontFamily: "monospace",
    fontSize: 18,
    textAlign: "justify",
  },
  sameLine: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const AppAboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={[styles.aboutTitle, styles.center, styles.marginMedium]}>
          Movie Browser
        </Text>
        <Text style={[styles.aboutText, styles.center]}>
          Made with {"\u2764"} by KingoMinho.
        </Text>
        <Text style={[styles.aboutTitle, styles.center, styles.marginMedium]}>
          About
        </Text>
        <Text style={[styles.marginMedium, styles.aboutText]}>
          Movie Browser is an app to browse movies and lookup their ratings,
          cast, director and brief plot details.
        </Text>
        <View style={[styles.marginMedium, styles.sameLine]}>
          <Text style={styles.aboutText}>This App uses the </Text>
          <TextLink
            style={styles.aboutText}
            text="OMDb API."
            url="http://www.omdbapi.com/"
          />
        </View>

        <Text style={[styles.aboutTitle, styles.center, styles.marginMedium]}>
          Attributions
        </Text>
        <View style={[styles.marginMedium, styles.sameLine]}>
          <Text style={styles.aboutText}>Icons made by </Text>
          <TextLink
            style={styles.aboutText}
            text="Freepik"
            url="https://www.flaticon.com/authors/freepik"
          />
          <Text style={styles.aboutText}> from </Text>
          <TextLink
            style={styles.aboutText}
            text="www.flaticon.com"
            url="https://www.flaticon.com/"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AppAboutScreen;
