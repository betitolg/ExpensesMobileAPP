import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React ,{useState}from "react";

const ExpensesForm = (props) => {
  const closeForm = () => {
    props.closeAction();
  };
  const [textInput, setTextInput] = useState("");
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const addItem = () => {

    const item = {
      id: Math.random().toString(),
      title: textInput,
      amount: textInput2,
      date: new Date(2020, 7, 14),
    }

    props.addAction(item);
  };
  const onChangeTextHandler = (evt) => setTextInput(evt);
  const onChangeTextHandler1 = (evt) => setTextInput1(evt);
  const onChangeTextHandler2 = (evt) => setTextInput2(evt);
  return (
    <View style={styles.expenseForm}>
      <View style={styles.formControl}>
        <Text>Descripción</Text>
        <TextInput style={styles.input}  onChangeText={onChangeTextHandler}/>
      </View>
      <View style={styles.formControl}>
        <Text>Fecha</Text>
        <TextInput style={styles.input}  onChangeText={onChangeTextHandler1}/>
      </View>
      <View style={styles.formControl}>
        <Text>Monto</Text>
        <TextInput style={styles.input} onChangeText={onChangeTextHandler2} />
      </View>
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
  formControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex:1,
    alignItems:"center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    height: 50,
    margin: 10,
    width:'50%',
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:24
  },
});

export default ExpensesForm;
