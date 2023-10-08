import { StyleSheet, Text, View } from "react-native";
const Card = ({ props, user, isUser }) => {
  if (isUser) {
    return (
      <View>
        <View>
          <Text style={styles.text}>{props}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text component="h4">{user}</Text>
        <View>
          <Text style={styles.textUser}>{props}</Text>
        </View>
      </View>
    );
  }
};

export default Card;

const styles = StyleSheet.create({
  text: {
    minWidth: 100,
    maxWidth: 300,
    minHeight: 50,
    color: "white",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "green",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  textUser: {
    minWidth: 100,
    maxWidth: 250,
    minHeight: 50,
    color: "white",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "grey",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  }
});
