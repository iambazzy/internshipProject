import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {Item, Input, Button, Icon} from 'native-base';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
class Main extends Component {
  state = {
    user: {
      email: 'basitmir123@gmail.com',
      password: '12345678',
    },
    email: '',
    password: '',
  };

  verifyUser = (userEmail, userPassword) => {
    userEmail =
      typeof userEmail === 'string' && userEmail.length > 5 ? userEmail : false;
    userPassword =
      typeof userPassword === 'string' && userPassword.length > 6
        ? userPassword
        : false;
    if (userEmail && userPassword) {
      if (
        userEmail === this.state.user.email &&
        userPassword === this.state.user.password
      ) {
        return true;
      }
    } else {
      return false;
    }
  };

  getFormDetails = () => {
    const {navigate} = this.props.navigation;
    let {email, password} = this.state;
    if (email && password !== '') {
      let verified = this.verifyUser(email, password);
      if (verified) {
        navigate('Dashboard');
        this.setState({
          email: '',
          password: '',
        });
      } else {
        showMessage({
          message: 'Check The Login Credentials',
          type: 'info',
          backgroundColor: 'red',
        });
      }
    } else {
      showMessage({
        message: `Can't Login Without Credentials`,
        type: 'info',
        backgroundColor: 'orange',
      });
    }
  };

  render() {
    return (
      <View style={styles.main}>
        {/* THE MAIN SCREEN LOGO CONTAINER STARTS */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.mainLogo}
            source={require('../../Assets/user4.png')}
          />
        </View>
        {/* THE MAIN SCREEN LOGO CONTAINER ENDS */}
        {/* THE MAIN SCREEN FORM CONTAINER STARTS */}
        <View style={styles.formContainer}>
          <View style={styles.inputRounded}>
            <Text style={styles.loginText}>
              {' '}
              <Icon name="settings" style={{fontSize: 14}} /> VENDOR LOGIN{' '}
            </Text>
            <Item style={styles.inputField} rounded>
              <Input
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                placeholderTextColor="lightgray"
                value={this.state.email}
                onChangeText={value => {
                  this.setState({
                    email: value,
                  });
                }}
              />
            </Item>
            <Item style={styles.inputField} rounded>
              <Input
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="lightgray"
                value={this.state.password}
                onChangeText={pass => {
                  this.setState({
                    password: pass,
                  });
                }}
              />
            </Item>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.loginButton}
                rounded
                light
                onPress={this.getFormDetails}>
                <Text style={{padding: 10}}>LOGIN</Text>
                <Text>
                  <Icon name="arrow-forward" />{' '}
                </Text>
              </Button>
            </View>
          </View>
        </View>
        {/* THE MAIN SCREEN FORM CONTAINER ENDS */}
        <FlashMessage position="top" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainLogo: {
    height: 210,
    width: 210,
  },
  brandingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRounded: {
    flex: 1,
    padding: 20,
  },
  loginButton: {
    padding: 20,
  },
  inputField: {
    margin: 5,
    borderColor: 'lightgray',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    paddingTop: 10,
  },
  loginText: {
    marginLeft: 9,
    paddingVertical: 10,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default Main;
