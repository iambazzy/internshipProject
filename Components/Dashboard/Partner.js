import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Alert} from 'react-native';
import {Picker, Icon, Form, Item, Input, Button, Label} from 'native-base';
import {TextInputMask} from 'react-native-masked-text';
import DropdownAlert from 'react-native-dropdownalert';

class Partner extends Component {
  state = {
    firmName: '',
    firmType: '',
    dt: '',
    doorNumber: '',
    locality: '',
    city: '',
    state: '',
    landmark: '',
    addressType: '',
    pincode: '',
    alternateContact: '',
  };

  verifyDetails = () => {
    let {
      firmName,
      firmType,
      doorNumber,
      locality,
      city,
      state,
      landmark,
      pincode,
      alternateContact,
    } = this.state;
    if (
      firmName &&
      firmType &&
      doorNumber &&
      locality &&
      city &&
      state &&
      landmark &&
      pincode &&
      alternateContact !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  submitToServer = () => {
    let verified = this.verifyDetails();
    if (verified) {
      this.dropDownAlertRef.alertWithType(
        'success',
        'Success',
        'We Will Contact You Soon',
      );
    } else {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Error',
        'Fill Form Completely',
      );
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
          <Text style={{paddingTop: 5, paddingLeft: 12, fontSize: 20}}>
            Enter Firm Details
          </Text>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>
                  Firm Name
                </Label>
                <Input
                  value={this.state.firmName}
                  onChangeText={firmName => {
                    this.setState({
                      firmName,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>
                  Firm Type
                </Label>
                <Input
                  value={this.state.firmType}
                  onChangeText={firmType => {
                    this.setState({
                      firmType,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: 28,
              marginRight: 15,
              paddingRight: 5,
            }}>
            <TextInputMask
              placeholder="Establishment Year"
              placeholderTextColor="lightgray"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                marginLeft: 15,
                fontSize: 13,
                paddingBottom: 0,
              }}
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={this.state.dt}
              onChangeText={dt => {
                this.setState({dt});
              }}
            />
          </View>
          <Text style={{paddingTop: 50, paddingLeft: 12, fontSize: 20}}>
            Enter Address Details
          </Text>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>
                  Door Number
                </Label>
                <Input
                  value={this.state.doorNumber}
                  onChangeText={doorNumber => {
                    this.setState({
                      doorNumber,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>
                  Locality
                </Label>
                <Input
                  value={this.state.locality}
                  onChangeText={locality => {
                    this.setState({
                      locality,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>City</Label>
                <Input
                  value={this.state.city}
                  onChangeText={city => {
                    this.setState({
                      city,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>State</Label>
                <Input
                  value={this.state.state}
                  onChangeText={state => {
                    this.setState({
                      state,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>
                  Landmark
                </Label>
                <Input
                  value={this.state.landmark}
                  onChangeText={landmark => {
                    this.setState({
                      landmark,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Text
                style={{
                  paddingTop: 12,
                  paddingLeft: 12,
                  marginLeft: 5,
                }}>
                Address Type
              </Text>
              <Picker
                selectedValue={this.state.addressType}
                style={{height: 40, paddingLeft: 12, marginLeft: 12}}
                onValueChange={addressType => this.setState({addressType})}>
                <Picker.Item label="Home" value="hm" />
                <Picker.Item label="Business" value="bs" />
              </Picker>
              {/* PLACEHOLDER FOR PICKlER */}
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>
                  Pin Code
                </Label>
                <Input
                  keyboardType="number-pad"
                  placeholderTextColor="lightgray"
                  value={this.state.pincode}
                  onChangeText={pincode => {
                    this.setState({
                      pincode,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View>
            <Form style={styles.formElement}>
              <Item floatingLabel>
                <Label style={{color: 'lightgray', fontSize: 13}}>
                  Alternate Contact Number
                </Label>
                <Input
                  keyboardType="number-pad"
                  value={this.state.alternateContact}
                  onChangeText={alternateContact => {
                    this.setState({
                      alternateContact,
                    });
                  }}
                />
              </Item>
            </Form>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.loginButton}
              rounded
              light
              onPress={this.submitToServer}>
              <Text style={{padding: 10, color: 'black'}}>Connect</Text>
              <Text>
                <Icon name="paper-plane" />{' '}
              </Text>
            </Button>
          </View>
          <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 0,
  },
  formElement: {
    paddingRight: 5,
    marginRight: 15,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    padding: 30,
    paddingRight: 8,
  },
  loginButton: {
    padding: 20,
  },
});

export default Partner;
