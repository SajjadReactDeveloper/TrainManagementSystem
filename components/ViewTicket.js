import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input, Icon, Card } from 'react-native-elements';

export default() => {
    return(
        <View style = {styles.container}>
            <Card>
                <Card.Title>Ticket Details</Card.Title>
                <Card.Divider/>
                <Text>Ticket Number</Text>
                <Text>Source</Text>
                <Text>Destination</Text>
                <Text>Time</Text>
                <Text>Fare</Text>
                <Text>Passenger Name</Text>
                <Text>Passenger CNIC</Text>
            </Card>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style = {{backgroundColor: 'green', padding: 10, marginTop: 10, borderRadius: 5}}><Text style = {{color: 'white', fontSize: 24}}>Print</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });