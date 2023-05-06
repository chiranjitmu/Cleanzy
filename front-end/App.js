import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Otp from "./screens/Otp";
import Personal from "./screens/Personal";
import Payment from "./screens/Payment";
import Vehicle from "./screens/Vehicle"

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
       <StatusBar />
      <Stack.Navigator>
         <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            headerShown: false,
          }}
        /> 
       <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Cleanzy",
            headerStyle: {
              backgroundColor: '#a2b4fe', 
           },
            fontWeight: 100,
            headerTitleAlign: "center",
            headerLeft: false
          }}
        /> 
        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{
          headerShown: false
          }}
        />
         <Stack.Screen
          name="Vehicle"
          component={Vehicle}
          options={{
          headerShown: false
          }}
        />
         <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            title: "Payment",
            headerStyle: {
              backgroundColor: '#a2b4fe', 
           },
            fontWeight: 100,
            headerTitleAlign: "center",
            headerLeft: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
