import React from "react";
import { View, ScrollView, Text } from "react-native";
import TextLink from "../components/TextLink";
import styles from "../styles/styles";

const AppAboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.aboutScreenContainer}>
        <Text
          style={[
            styles.aboutScreenTitle,
            styles.centerText,
            styles.marginMedium,
          ]}
        >
          Movie Browser
        </Text>
        <Text style={[styles.aboutScreenText, styles.centerText]}>
          Made with {"\u2764"} by KingoMinho.
        </Text>
        <Text
          style={[
            styles.aboutScreenTitle,
            styles.centerText,
            styles.marginMedium,
          ]}
        >
          About
        </Text>
        <Text style={[styles.marginMedium, styles.aboutScreenText]}>
          Movie Browser is an app to browse movies and lookup their ratings,
          cast, director and brief plot details.
        </Text>
        <View style={[styles.marginMedium, styles.sameLine]}>
          <Text style={styles.aboutScreenText}>This App uses the </Text>
          <TextLink
            style={styles.aboutScreenText}
            text="OMDb API."
            url="http://www.omdbapi.com/"
          />
        </View>

        <Text
          style={[
            styles.aboutScreenTitle,
            styles.centerText,
            styles.marginMedium,
          ]}
        >
          Attributions
        </Text>
        <View style={[styles.marginMedium, styles.sameLine]}>
          <Text style={styles.aboutScreenText}>Icons made by </Text>
          <TextLink
            style={styles.aboutScreenText}
            text="Freepik"
            url="https://www.flaticon.com/authors/freepik"
          />
          <Text style={styles.aboutScreenText}> from </Text>
          <TextLink
            style={styles.aboutScreenText}
            text="www.flaticon.com"
            url="https://www.flaticon.com/"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AppAboutScreen;
