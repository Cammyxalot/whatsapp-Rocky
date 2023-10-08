import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Keyboard,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Card from "./src/components/Card";
export default function App() {
  const props = "test";
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const replies = require("./content.json");

  const getReplies = () => {
    const checkReplies = replies.replies;
    const randomIndex = Math.floor(Math.random() * checkReplies.length);
    return checkReplies[randomIndex];
  };

  const sendAutoReplies = () => {
    const replies = getReplies();
    const sendMessage = {
      text: replies.text,
      user: replies.user,
      isUser: false,
    };
    setMessages([...messages, sendMessage]);
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.isUser === true) {
      const timer = setTimeout(() => {
        sendAutoReplies();
      }, 1000);
    }
  }, [messages]);

  const handleSend = () => {
    const userMessage = { text: newMessage, isUser: true };
    setMessages([...messages, userMessage]);
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
        <FlatList
          style={styles.flatlist}
          data={messages}
          renderItem={({ item }) => (
            <Card props={item.text} user={item.user} isUser={item.isUser} />
          )}
        />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Nouveau message"
              value={newMessage}
              onChangeText={(text) => setNewMessage(text)}
            />
            <Button
              style={styles.inputButton}
              onPress={handleSend}
              title="Envoyer"
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "red",
    overflow: "scroll",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight + 40,
  },
  header: {
    top: 0,
    left: 0,
    color: "black",
  },
  flatlist: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 30,
    paddingBottom: 100,
    height: "50%",
  },
  keyboard: {
    marginBottom: 20,
  },
  inputContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
  },
  textInput: {
    height: 60,
    width: "80%",
  },
  inputButton: {
    width: "20%",
    height: 60,
    backgroundColor: "blue",
  },
});
