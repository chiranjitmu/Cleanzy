import React, { useState } from "react";
import { View, TextInput, Button, Image, Text, StyleSheet } from "react-native";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const lowerCaseEmail = email.trim().toLowerCase();
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.trim())) {
    alert("Please enter a valid email address");
    return;
  }
  try {
    const response = await fetch("http://{your ipaddress}:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: lowerCaseEmail, password, name, number }),
    });

    const success = await response.json();
 
    if (success.message === "signup success") {
      navigation.navigate("Otp", { email });
    } else {
      alert(success.message);
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while logging in.");
  }
  };

  return (
    <View>
      <Image
        source={require("../assets/carservice.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.name}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.email}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.number}
        placeholder="Phone-Number"
        value={number}
        keyboardType="numeric"
        onChangeText={setNumber}
      />
      <TextInput
        style={styles.password}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.button}>
        <Button title="Signup" onPress={handleSignup} />
      </View>
      <View>
        <Text style={{ marginTop: 35, marginLeft: "19%", fontSize: 15 }}>
          Already have an account?
        </Text>
        <Text
          style={{
            marginTop: -19,
            marginLeft: "68%",
            color: "blue",
            fontSize: 15,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Log-in
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "97%",
    marginLeft: 10,
    height: "40%",
  },
  name: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginLeft: "10%",
    width: "80%",
  },
  number: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: "5%",
    marginLeft: "10%",
    width: "80%",
  },
  email: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: "5%",
    marginLeft: "10%",
    width: "80%",
  },
  password: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: "5%",
    marginLeft: "10%",
    width: "80%",
  },
  button: {
    width: "20%",
    marginLeft: "40%",
    marginTop: "10%",
  },
});

export default Signup;


