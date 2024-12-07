import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Products from "@/components/products";
import { useNavigation } from '@react-navigation/native';

const products = Products();

const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logo}>
          <Image source={require("../assets/images/TOPCOFFE 2.png")} />
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquise seu produto!"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://milkmellowgelato.com.br/wp-content/uploads/2023/08/affogato-threeByTwoMediumAt2X-v2.jpg",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <View
              key={product.id}
              style={[
                styles.productCard,
                index === filteredProducts.length - 2 && styles.secondToLast,
                index === filteredProducts.length - 1 && styles.last,
              ]}
            >
              <TouchableHighlight
                onPress={() => navigation.navigate("InfoProducts", { productId: product.id })}
                underlayColor="white"
              >
                <View>
                  <Image source={{ uri: product.image }} style={styles.productImage} />
                  <Text style={styles.productTitle}>{product.title}</Text>
                  <Text style={styles.productSubtitle}>{product.subtitle}</Text>
                </View>
              </TouchableHighlight>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE7DD",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    flex: 1,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    marginLeft: 5,
  },
  productSubtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "left",
    width: "100%",
    marginLeft: 5,
  },
  logo: {
    alignItems: "center",
  },
  secondToLast: {
    marginBottom: 10,
  },
  last: {
    marginBottom: 10,
  },
});

export default HomeScreen;
