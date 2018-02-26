import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: "#efefef"
  },
  navigation: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#666666",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    padding: 5
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    marginTop: 10
  }
});
export default styles;
