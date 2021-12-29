import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import db from '../db/firestore'
import { Input, Icon } from 'react-native-elements';

const FIREBASE_API_ENDPOINT =
  'https://covid-19-app-fe660-default-rtdb.firebaseio.com/';

const postData = (country) => {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      name: country,
    }),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/country.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

const deleteData = () => {
  const id = '-MrWvChDCFKoDz4hiiVp';
  var requestOptions = {
    method: 'DELETE',
  };

  fetch(`${FIREBASE_API_ENDPOINT}/country/${id}.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log('Delete Response:', result))
    .catch((error) => console.log('error', error));
};

const updateData = () => {
  const id = '-Mra4c0ncxW5hz5GkRNJ';
  var requestOptions = {
    method: 'PATCH',
    body: JSON.stringify({
      username: 'UserName',
      password: 'Password',
      employeename: 'Update New Employee',
    }),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/country/${id}.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export default ({navigation}) => {
    const image = {
        uri: 'https://images.unsplash.com/photo-1530625625693-b38b404cb1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      };
      return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style = {{textAlign:'center', color: '#fff', marginBottom: 10, fontSize: 24}}>Update Ticket</Text>
            <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>From Station</Text>
          <Input
            placeholder="Source"
            placeholderTextColor = "#fff"
            inputStyle = {{color: '#fff'}}
            leftIcon={
              <Icon
                name="plane"
                type="font-awesome"
                color="#fff"
                iconStyle = {{marginRight: 10}}
              />
            }
          />
    
          <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>To Station</Text>
          <Input
            placeholder="Destination"
            placeholderTextColor = "#fff"
            inputStyle = {{color: '#fff'}}
            leftIcon={
              <Icon
                name="plane"
                type="font-awesome"
                color="#fff"
                iconStyle = {{marginRight: 10}}
              />
            }
          />
    
          <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>Travel Date</Text>
          <Input
            placeholder="Date"
            placeholderTextColor = "#fff"
            inputStyle = {{color: '#fff'}}
            leftIcon={
              <Icon
                name="calendar"
                type="font-awesome"
                color="#fff"
                iconStyle = {{marginRight: 10}}
              />
            }
          />
    
          <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>Passenger Name</Text>
          <Input
            placeholder="Enter Passenger Name"
            placeholderTextColor = "#fff"
            inputStyle = {{color: '#fff'}}
            leftIcon={
              <Icon
                name="user"
                type="font-awesome"
                color="#fff"
                iconStyle = {{marginRight: 10}}
              />
              
            }
          />
    
          <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>Passenger CNIC</Text>
          <Input
            placeholder="Passenger CNIC"
            placeholderTextColor = "#fff"
            inputStyle = {{color: '#fff'}}
            leftIcon={
              <Icon
                name="id-card"
                type="font-awesome"
                color="#fff"
                iconStyle = {{marginRight: 10}}
              />
            }
          />
    
          <View style = {{justifyContent: 'center', alignItems: 'center', margin: 10}}>
            <TouchableOpacity onPress = {() => {
              navigation.navigate('Update Employee');
            }} style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 5,
                  width: 150,
                  flexDirection: 'row',
                }}><Text style = {{fontSize: 20, color: '#fff'}}>Update Ticket</Text></TouchableOpacity>
          </View>
          </ImageBackground>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 24,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });