import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";

const Personal = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http:/{your ipaddress}:5000/personal-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, dob, nationality }),
      });

      const submit = await response.json();

      if (submit.message === "submitted successfull") {
        navigation.navigate("Vehicle");
        setFirstname("");
        setLastname("");
        setDob("");
        setNationality("");
      } else {
        alert(submit.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submit in.");
    }
  };

  return (
    <SafeAreaView>
      <View>
        <StatusBar hidden />
        <Image
          source={require("../assets/carwash.jpg")}
          style={styles.personalimg}
        />
        <TextInput
          style={styles.Firstname}
          placeholder="First Name"
          value={firstname}
          onChangeText={setFirstname}
        />
        <TextInput
          style={styles.Lastname}
          placeholder="Last Name"
          value={lastname}
          onChangeText={setLastname}
        />
        <TextInput
          style={styles.DOB}
          placeholder="MM/DD/YYYY"
          value={dob}
          onChangeText={setDob}
        />
       
        <TextInput
          style={styles.Nationality}
          placeholder="Nationality"
          value={nationality}
          onChangeText={setNationality}
        />
        <View style={styles.button}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  personalimg: {
    resizeMode: "contain",
    width: "97%",
    borderTopRightRadius: 70,
    marginLeft: 10,
    height: "45%",
  },
  Firstname: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: "10%",
    marginLeft: "10%",
    width: "80%",
  },
  Lastname: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
  },
  DOB: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
  },
  Nationality: {
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

export default Personal
