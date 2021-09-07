import ExpenseDetail from "../components/screens/ExpenseDetail";
import Expenses from "../components/Expenses";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOption={{
      
    }}>
        <Stack.Screen name="Home" component={Expenses}/>
       
        <Stack.Screen name="Detail" component={ExpenseDetail}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;
