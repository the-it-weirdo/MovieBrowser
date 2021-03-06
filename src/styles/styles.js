import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  // HomeScreen
  homeScreenContainer: {
    flex: 1,
    paddingHorizontal: 5,
    alignContent: "space-between",
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  // MovieDetails
  movieDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 10,
  },
  movieDetailsItem: {
    width: "50%",
  },
  poster: {
    height: 200,
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    padding: 5,
  },
  detailItem: {
    fontSize: 14,
    padding: 10,
  },
  directorAndWriter: {
    fontStyle: "italic",
    justifyContent: "center",
  },
  // RowItem
  rowItemContainer: {
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 2,
    borderRadius: 5,
    marginVertical: 5,
  },
  rowItemViewItem: {
    width: "75%",
    justifyContent: "center",
  },
  rowItemPoster: {
    width: "25%",
    height: 75,
  },
  rowItemTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  rowItemYear: {
    fontStyle: "italic",
    color: "gray",
  },
  //SearchView
  searchViewContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  searchViewInput: {
    borderWidth: 1,
    width: "70%",
    borderColor: "black",
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  searchViewButton: {
    borderRadius: 50,
    backgroundColor: "#00aaff",
    alignContent: "center",
    justifyContent: "center",
  },
  // AboutScreen
  aboutScreenContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  marginMedium: {
    margin: 10,
  },
  aboutScreenTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  centerText: {
    textAlign: "center",
  },
  aboutScreenText: {
    fontFamily: "monospace",
    fontSize: 18,
    textAlign: "justify",
  },
  sameLine: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
