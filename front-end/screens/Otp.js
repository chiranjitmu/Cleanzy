import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {useRoute} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

 const App = () => {

  const [logemail, setLogemail] =  useState("")
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [verified, setVerified] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  


  const generateOTP = () => {
      let otp = '';
      const possibleChars = '0123456789';
    
      for (let i = 0; i < 6; i++) {
        otp += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      }
      return otp;
    }

   

  

  const sendOTP = async () => {
    const otp = generateOTP();
    setOtp(otp); 
    setLogemail(route.params?.email);


      try {
        const response = await fetch("http://{your ipaddress}:5000/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ logemail, otp}),
        });
    
    
      if (response.status === 200) {
        setSent(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = () => {
    if (otp === enteredOTP) {
      setVerified(true);
      navigation.navigate("Login");
    } else {
    alert('OTP is invalid');
    }
  }
    
  

  return (
    <View>
      <StatusBar />
      {!sent && (
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '55%', marginHorizontal: 20, height: '50%'}}>
          <Image style={{marginBottom: '20%', resizeMode: 'contain', width: '80%', height: '60%'}} source={require("../assets/carwash.jpg")}/>
          <Button title="Send OTP" onPress={sendOTP} />
        </View>
      )}
      {sent && !verified && (
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '55%', borderWidth: 1, marginHorizontal: 20, height: '50%'}}>
          <TextInput style={{marginBottom: '20%', borderWidth: 0.5, width: '50%', height: '20%'}}
            placeholder="Enter OTP"
            onChangeText={setEnteredOTP}
          />
          <Text style={{marginBottom: 20}}>CHECK EMAIL FOR OTP</Text>
          <Button title="Verify OTP" onPress={verifyOTP} />
       </View>
      )}
    </View>
  );
}


export default App