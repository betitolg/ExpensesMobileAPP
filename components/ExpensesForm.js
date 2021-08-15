import { Button, StyleSheet, TextInput, View } from "react-native";
import React,{useState} from "react";

const ExpensesForm = (props) => {
  const [textInput, setTextInput] = useState("");

  const closeForm = () => {
    props.closeAction();
  };

  const addItem = ()  => {
    props.addAction(textInput);
  };
  const onChangeTextHandler = (evt) => setTextInput(evt);

  return (
    <View style={styles.expenseForm}>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={onChangeTextHandler}
      />
      <TextInput style={styles.input} value="" />
      <TextInput style={styles.input} value="" />
      <View style={styles.buttonContainer}>
        <Button title="Agregar" onPress={addItem} />
        <Button title="Cerrar" onPress={closeForm} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  expenseForm: {
    marginTop: 4,
    marginBottom: 8,
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
    height: 250,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:24
  },
});

export default ExpensesForm;
