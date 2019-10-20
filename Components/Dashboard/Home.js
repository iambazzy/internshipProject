import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Home extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>WELCOME TO VENDOR DASHBOARD</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
