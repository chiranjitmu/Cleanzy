import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View  style={styles.container}>
    <View>
      <Image
        source={require("../assets/icon.jpg")}
        style={{
          width: "100%",
          resizeMode: "contain",
          height: "90%",
          borderTopRightRadius: 70,
          borderTopLeftRadius: 70,
        }}
      />
      </View>
        <View style={{backgroundColor: '#fddea8', height: '100%', marginTop: '-50%'}}>
        <TouchableOpacity>
          <Text style={styles.personalinfo} onPress={() => navigation.navigate('Personal')}>Book for OnBoard</Text>
        </TouchableOpacity>
        <Text style={styles.Or}>OR</Text>
        <TouchableOpacity>
          <Text style={styles.Logout} onPress={() => navigation.navigate('Login')}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a2b4fe",
  },
  personalinfo: {
    fontSize: 20,
    position: "absolute",
    backgroundColor: '#a2b4fe',
    top: 50,
    left: 90,
    borderWidth: 1,
    padding: 10
  },
  Logout: {
    fontSize: 20,
    position: "absolute",
    backgroundColor: '#a2b4fe',
    top: 160,
    left: 140,
    borderWidth: 1,
    padding: 10
  },
  Or: {
    fontSize: 20,
    position: "absolute",
    top: 120,
    left: 165,
  }
});
