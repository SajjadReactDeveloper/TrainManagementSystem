import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input, Icon } from 'react-native-elements';
import React from 'react';
import db from '../db/firestore'
import DatePicker from 'react-native-neat-date-picker'

export default ({navigation}) => {
    const image = {
        uri: 'https://images.unsplash.com/photo-1530625625693-b38b404cb1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      };
      const [showDatePicker, setShowDatePicker] = React.useState(false)
      const [source, setSource] = React.useState();
      const [destination, setDestination] = React.useState();
      const [date, setDate] = React.useState();
      const [name, setName] = React.useState();
      const [cnic, setCnic] = React.useState();
      const [selectedCity, setSelectedCity] = React.useState();

      const openDatePicker = () => {
        setShowDatePicker(true)
      }
    
      const onCancel = () => {
        setShowDatePicker(false)
      }
    
      const onConfirm = ( date ) => {
        setShowDatePicker(false)
        setDate((date.getUTCDate()+1) + '-' + (date.toLocaleString('en-us', { month: 'long' })) + '-' + date.getUTCFullYear())
      }

      return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style = {{textAlign:'center', color: '#fff', marginBottom: 10, fontSize: 24}}>Book Ticket</Text>
            <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>From Station</Text>
          <Input
            placeholder="Source"
            placeholderTextColor = "#fff"
            inputStyle = {{color: '#fff'}}
            onChangeText = {setSource}
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
            onChangeText = {setDestination}
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
          <TouchableOpacity onPress = {() => {setShowDatePicker(true)}}>
          <Input
          placeholder="Enter Date"
          placeholderTextColor = "#fff"
          inputStyle = {{color: '#fff'}}
          onChangeText = {setDate}
          value ={date}
          leftIcon={
            <Icon
              name="calendar"
              type="font-awesome"
              color="#fff"
              iconStyle = {{marginRight: 10}}
            />
          }
          rightIcon={
            <Icon
              name="calendar"
              type="font-awesome"
              color="#fff"
              iconStyle = {{marginRight: 10}}
              onPress = {() => {setShowDatePicker(true)}}
            />
          }
        />
          </TouchableOpacity>
          <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    
          <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>Passenger Name</Text>
          <Input
            placeholder="Enter Passenger Name"
            placeholderTextColor = "#fff"
            inputStyle = {{color: '#fff'}}
            onChangeText = {setName}
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
            onChangeText = {setCnic}
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
              db.collection('Ticket').add({
               source: source,
               destination: destination,
               date: date,
               name: name,
               cnic: cnic,
              }).then(result => navigation.navigate('View Ticket'))
              .catch(err => console.log(err))
            }} style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 5,
                  width: 180,
                  flexDirection: 'row',
                }}><Text style = {{fontSize: 20, color: '#fff'}}><Icon
                name="ticket"
                type="font-awesome"
                color="#fff"
                iconStyle = {{marginRight: 10}}
              />Book Ticket</Text></TouchableOpacity>
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