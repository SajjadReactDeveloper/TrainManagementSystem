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

export default ({navigation}) => {
  const image = {
    uri: 'https://images.unsplash.com/photo-1530625625693-b38b404cb1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style = {{textAlign:'center', color: '#fff', marginBottom: 10, fontSize: 24}}>Delete Employee</Text>
        <Text style = {{marginLeft: 10, color: '#fff', fontSize: 18}}>Train No</Text>
      <Input
        placeholder="Enter Employee ID"
        placeholderTextColor = "#fff"
        inputStyle = {{color: '#fff'}}
        leftIcon={
          <Icon
            name="id-card"
            type="font-awesome"
            color="#fff"
          />
        }
      />

      <View style = {{justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <TouchableOpacity onPress = {() => {
          navigation.navigate('View Train');
        }} style={{
              backgroundColor: 'green',
              padding: 10,
              borderRadius: 5,
              width: 170,
              flexDirection: 'row',
            }}><Text>
            </Text><Text style = {{fontSize: 20, color: '#fff'}}>Delete Employee</Text></TouchableOpacity>
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