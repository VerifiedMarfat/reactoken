import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
import { setInterval } from "core-js/library/web/timers";

class Header extends Component {
  render() {
    return (
      <Text>Hello, {this.props.name}!</Text>
    );
  }
}

class Monkeys extends Component {
  render() {
    const pic = {
      uri: "http://www.monkeyworld.org/images/monkeys.jpg"
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    );
  }
}

class Mood extends Component {
  constructor(props) {
    super(props);
    const moods = ["happy", "sad"];
    this.state = { mood: moods[0] };

    setInterval(() => {
      if (this.props.rotate) {
        this.setState(previousState => {
          return { mood: (previousState.mood == moods[0]) ? moods[1] : moods[0] }
        })
      }
    }, 1000);
  }
  render() {
    return (
      <Text>My current is {this.state.mood}</Text>
    )
  }
}

class Initiate extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: '' };
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Write answer.."
          onChangeText={(answer) => this.setState({ answer })}
        />
        <Text>{this.state.answer}</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChanging: true };
  }
  stopRotation() {
    return this.setState({ isChanging: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header name="Monkey Business" />
        <Monkeys />
        <Mood rotate={this.state.isChanging} />

        <Text>You ready for the real magic?</Text>
        <Initiate />

        <Button
          onPress={() => { this.stopRotation() }}
          title="Press Me to stop changing moods"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
