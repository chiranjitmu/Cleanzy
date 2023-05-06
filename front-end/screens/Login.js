import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";

const Login = ({ navigation }) => {
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

 

const handleLogin = async () => {
  const lowerCaseEmail = loginemail.trim().toLowerCase();
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(loginemail.trim())) {
    alert("Please enter a valid email address");
    return;
  }

  try {
    const response = await fetch("http://{your ipaddress}:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loginemail: lowerCaseEmail, loginpassword }),
    });

    const login = await response.json();
 
    if (login.message === "Login successful") {
      navigation.navigate("Home");
      setLoginemail("");
      setLoginpassword("");
    } else {
      alert(login.message);
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while logging in.");
  }
};



  return (
    <SafeAreaView>
      <View>
      <StatusBar hidden />
        <Image source={require("../assets/carwash.jpg")} style={styles.image} />
        <TextInput
          style={styles.email}
          placeholder="Email"
          value={loginemail}
          onChangeText={setLoginemail}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          value={loginpassword}
          onChangeText={setLoginpassword}
          secureTextEntry
        />
        <View style={styles.button}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: "45%" }}>OR</Text>
          <Text style={{ borderBottomWidth: 0.3 }}></Text>
          <Text style={{ marginTop: 20, marginLeft: "25%", fontSize: 15 }}>
            Don't have an account?
          </Text>
          <Text style={{ marginTop: -19, marginLeft: "69%", color: 'blue', fontSize: 15 }} onPress={() => navigation.navigate("Signup")}>
            Sign-up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   image: {
    resizeMode: "contain",
    width: "97%",
    borderTopRightRadius: 70,
    marginLeft: 10,
    height: "50%",
  },
  email: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: "10%",
    marginLeft: "10%",
    width: "80%",
  },
  password: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
  },
  button: {
    width: "20%",
    marginLeft: "38%",
    marginTop: "10%",
  },
});

export default Login;
