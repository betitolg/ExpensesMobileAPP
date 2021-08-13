import { StyleSheet, Text, View } from "react-native";

import ExpensesList from "./ExpensesList";
import React from "react";

function Expenses(props) {
  return (
    <View style={styles.expenses}>
       
      <ExpensesList
        items={props.items}
        date={props.date}
        amount={props.amount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  expenses: {
    
  },
});

export default Expenses;
