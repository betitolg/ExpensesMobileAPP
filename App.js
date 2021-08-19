import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Expenses from "./components/Expenses";
import ExpensesForm from "./components/ExpensesForm";
import { Header } from "react-native-elements/dist/header/Header";

const App = () => {
  const [itemSelected, setItemSelected] = useState({});
  const expenses_demo = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Vino",
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
   setItemList(expenses_demo);
  }, [])

  
  const [formVisible, setFormVisible] = useState(false);

  const closeAddForm = () => {
    setFormVisible(false);
  };

const OnDeleteItem=(id)=>{
console.log("eliminando " + id)
  setItemSelected(itemList.find((item) => item.id === id));

  setItemList(itemList.filter((item) => item.id !== itemSelected.id));

  
}

  const addItem=(item)=>{
    setItemList([
      ...itemList,
     item,
    ]);


  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Gastos</Text>

      {!formVisible && (
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => setFormVisible(true)}
        >
          <Text style={styles.buttonTextColor}>Registrar Gasto</Text>
        </TouchableOpacity>
      )}

      {formVisible && <ExpensesForm closeAction={closeAddForm} addAction={addItem}/>}
      <Expenses items={itemList}  OnDeleteItem={OnDeleteItem}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 25,
    backgroundColor: "#eaeaea",
  },
  buttonAdd: {
    backgroundColor: "#3b52c4",
    width: "92%",
    marginTop: 20,
    borderRadius: 20,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 30,
    borderWidth: 3,
  },
  buttonTextColor: {
    color: "#fff",
    fontWeight: "500",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "92%",
  },
});

export default App;
