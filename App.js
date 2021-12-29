import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Input, Icon } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import MainScreen from './components/MainScreen'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AddEmployee from './components/AddEmployee'
import ViewEmployee from './components/ViewEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import DeleteEmployee from './components/DeleteEmployee'
import AddTicket from './components/AddTicket'
import CancelTicket from './components/CancelTicket'
import UpdateTicket from './components/UpdateTicket';
import ViewTicket from './components/ViewTicket'
import EmployeeDetail from './components/EmployeeDetail'
import firestore from '@react-native-firebase/firestore'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ViewEmployee}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Employee"
          component={AddEmployee}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="View Employee"
          component={ViewEmployee}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Update Employee"
          component={UpdateEmployee}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Delete Employee"
          component={DeleteEmployee}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Book Ticket"
          component={AddTicket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cancel Ticket"
          component={CancelTicket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Update Ticket"
          component={UpdateTicket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="View Ticket"
          component={ViewTicket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Employee Detail"
          component={EmployeeDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
