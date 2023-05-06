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

const Vehicle = ({ navigation }) => {
  const [cartype, setCartype] = useState("");
  const [carbrand, setCarbrand] = useState("");
  const [carmodel, setCarmodel] = useState("");
  const [carvariant, setCarvariant] = useState("");
  const [carregdno, setCarregdno] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://{your ipaddress}:5000/vehicle-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartype, carbrand, carmodel, carvariant, carregdno }),
      });

      const submit = await response.json();

      if (submit.message === "submitted successfull") {
        alert("Once payment done, Our Team will co-ordinate on call")
        navigation.navigate("Payment");
        setCartype("");
        setCarbrand("");
        setCarmodel("");
        setCarvariant("");
        setCarregdno("");
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
          style={styles.vehicleimg}
        />
        <TextInput
          style={styles.Cartype}
          placeholder="Car type"
          value={cartype}
          onChangeText={setCartype}
        />
        <TextInput
          style={styles.Carbrand}
          placeholder="Car brand"
          value={carbrand}
          onChangeText={setCarbrand}
        />
        <TextInput
          style={styles.Carmodel}
          placeholder="Car model"
          value={carmodel}
          onChangeText={setCarmodel}
        />
        <TextInput
          style={styles.Carvariant}
          placeholder="Car variant"
          value={carvariant}
          onChangeText={setCarvariant}
        />
       
        <TextInput
          style={styles.Carregdno}
          placeholder="Car regd-no"
          value={carregdno}
          onChangeText={setCarregdno}
        />
        <View style={styles.button}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vehicleimg: {
    resizeMode: "contain",
    width: "97%",
    borderTopRightRadius: 70,
    marginLeft: 10,
    height: "35%",
  },
  Cartype: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: "10%",
    marginLeft: "10%",
    width: "80%",
  },
  Carbrand: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
  },
  Carmodel: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
  },
  Carvariant: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
  },
  Carregdno: {
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

export default Vehicle
