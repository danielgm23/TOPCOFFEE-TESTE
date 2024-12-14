import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const StartPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <TouchableHighlight
                onPress={() => navigation.navigate("Home")}
                underlayColor="white"
              >
      <Ionicons name="arrow-undo-sharp" size={24} color="black" />
      </TouchableHighlight>
      <Text style={styles.text}>PEDIDO N</Text>
      <Ionicons name="heart-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    backgroundColor: "#EFE7DD",
    padding: 20, 
  },
  text: {
    fontSize: 20,
    fontWeight: "bold", 
    textAlign: "center",
  },
});

export default StartPage;
