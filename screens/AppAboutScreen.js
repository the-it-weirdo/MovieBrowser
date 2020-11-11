import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  marginMedium: {
    margin: 10,
  },
  aboutTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  aboutText: {
    fontFamily: "monospace",
    fontSize: 18,
  }
});

const AppAboutScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={[styles.aboutTitle, styles.marginMedium]}>About</Text>
        <Text style={[styles.marginMedium, styles.aboutText]}>
          Movie Browser is an app to browse movies and lookup their ratings,
          cast, director and brief plot details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppAboutScreen;
