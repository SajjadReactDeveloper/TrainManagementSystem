import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";
import db from "../db/firestore";
import React from "react";

export default ({ navigation }) => {
  const [task1, setTask] = React.useState([]);
  React.useEffect(() => {
    // db.collection('Employee')
    // .get()
    // .then(result => result.docs)
    // .then(docs => docs.map(doc => ({id: doc.id, name: doc.data().name, age: doc.data().age, cnic: doc.data().cnic, contact: doc.data().contact, designation: doc.data().designation})))
    // .then(task => {setTask(task), console.log(task1)})
    db.collection("Employee").onSnapshot({
      next: (querySnapshot) => {
        const tasks = querySnapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ID: docSnapshot.data().id,
          name: docSnapshot.data().name,
          age: docSnapshot.data().age,
          cnic: docSnapshot.data().cnic,
          contact: docSnapshot.data().contact,
          designation: docSnapshot.data().designation,
        }));
        setTask(tasks);
      },
      error: (err) => console.log(err),
    });
  }, []);

  const deleteData = (id) => {
    db.collection("Employee")
      .doc(id)
      .delete()
      .then((result) => console.log("Deleted"));
  };

  return (
    <View style={{ marginTop: 30 }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title numeric>Name</DataTable.Title>
          <DataTable.Title numeric>Update</DataTable.Title>
          <DataTable.Title numeric>Delete</DataTable.Title>
        </DataTable.Header>

        {task1.map((task) => (
          <TouchableOpacity onPress={() => {navigation.navigate('Employee Detail', {item: {id: task.ID, name: task.name, age: task.age, cnic: task.cnic, contact: task.contact, designation: task.designation}})}}>
            <DataTable.Row>
              <DataTable.Cell>{task.ID}</DataTable.Cell>
              <DataTable.Cell numeric>{task.name}</DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Update Employee", { item: task.id });
                  }}
                >
                  <Ionicons name="create-outline" size={24} color="red" />
                </TouchableOpacity>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => {
                    deleteData(task.id);
                  }}
                >
                  <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          </TouchableOpacity>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
