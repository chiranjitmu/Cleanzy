import { Image, ScrollView, Text, Button, View, Linking, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./colors";
import { useNavigation } from "@react-navigation/native";

const gradient = [colors["dark-gray"], colors.black];

const Payment = () => {
  const navigation = useNavigation();

  const payment = () => {
    navigation.navigate("Home")
  }

  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#303030', height: '100%'}}>
      <LinearGradient
        colors={gradient}
        style={{
          padding: 30,
          height: 160,
          borderRadius: 20,
          flexDirection: "row",
          marginTop: '10%',
        }}
      >
        <View
          style={{
            maxWidth: "50%",
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 10,
            }}
          >
            Car Service
          </Text>

          <Text
            style={{
              color: colors.yellow,
              fontWeight: "100",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            BASIC
          </Text>

          <Text
            style={{
              color: colors.light,
            }}
          ></Text>
          <MaterialCommunityIcons
            name="currency-inr"
            color={colors.light}
            size={20}
            style={{ position: "absolute", top: 95, right: 110 }}
          />
          <Button
            title="599"
            color="#a2b4fe"
            onPress={() =>
              Linking.openURL("https://book.stripe.com/test_3cscQFawOd0h2Os3cc")
            }
          />
        </View>
        <View
          style={{
            width: "50%",
            position: "relative",
          }}
        >
          <Image
            style={{
              width: "100%",
              marginLeft: 30,
              height: 100,
            }}
            source={require("../assets/basic.png")}
          />
        </View>
      </LinearGradient>

      <LinearGradient
        colors={gradient}
        style={{
          padding: 30,
          height: 160,
          borderRadius: 20,
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <View
          style={{
            maxWidth: "50%",
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 10,
            }}
          >
            Car Service
          </Text>

          <Text
            style={{
              color: colors.yellow,
              fontWeight: "100",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            PREMIUM
          </Text>

          <Text
            style={{
              color: colors.light,
            }}
          ></Text>
          <MaterialCommunityIcons
            name="currency-inr"
            color={colors.light}
            size={20}
            style={{ position: "absolute", top: 95, right: 110 }}
          />
          <Button
            title="999"
            color="#a2b4fe"
            onPress={() =>
              Linking.openURL("https://book.stripe.com/test_eVa17XdJ02lD2Os4gh")
            }
          />
        </View>
        <View
          style={{
            width: "50%",
            position: "relative",
          }}
        >
          <Image
            style={{
              width: "100%",
              marginLeft: 30,
              height: 70,
            }}
            source={require("../assets/premium.png")}
          />
        </View>
      </LinearGradient>

      <LinearGradient
        colors={gradient}
        style={{
          padding: 30,
          height: 160,
          borderRadius: 20,
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <View
          style={{
            maxWidth: "50%",
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 10,
            }}
          >
            Car Service
          </Text>

          <Text
            style={{
              color: colors.yellow,
              fontWeight: "100",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            DELUXE
          </Text>

          <Text
            style={{
              color: colors.light,
            }}
          ></Text>
          <MaterialCommunityIcons
            name="currency-inr"
            color={colors.light}
            size={20}
            style={{ position: "absolute", top: 95, right: 110 }}
          />
          <Button
            title="1599"
            color="#a2b4fe"
            onPress={() =>
              Linking.openURL("https://book.stripe.com/test_9AQ4k96gy7FXfBe5km")
            }
          />
        </View>
        <View
          style={{
            width: "50%",
            position: "relative",
          }}
        >
          <Image
            style={{
              width: "100%",
              marginLeft: 30,
              height: 70,
            }}
            source={require("../assets/deluxe.png")}
          />
        </View>
      </LinearGradient>

      <View
        style={{
          marginTop: 35,
          width: 100,
          marginLeft: "36%",
        }}
      >
        <Button
          title="Go to Home"
          onPress={payment}
          color='#a2b4fe'
  
        />
      </View>
    </ScrollView>
   </SafeAreaView>
  );
};

export default Payment;
