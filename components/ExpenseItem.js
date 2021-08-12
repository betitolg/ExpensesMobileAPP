import { StyleSheet, Text, View } from "react-native";

import ExpenseDate from "./ExpenseDate";
import React from "react";

const ExpenseItem = (props) => {
  return (
    <View style={styles.expenseItem}>
      <Text style={styles.expenseitem__description}>{props.title}</Text>
    <Text style={styles.amount}>$ {props.amount}</Text>
   <ExpenseDate date={props.date}/>
    </View>
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    marginTop: 3,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#123",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#dedede",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "92%",
    height: 80
  },
  expenseitem__description: {
    textAlign: "center",
  },
  amount:{
    borderColor: "#000",
    borderRadius: 6,
    borderWidth: 2,
    borderColor:'#000',
    color: "#000",
    width:'17%',
    
    
  }
});

export default ExpenseItem;
