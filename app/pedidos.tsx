import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import StartPage from "@/components/startPage";
import Ionicons from "react-native-vector-icons/Ionicons";

// Obtendo a largura da tela
const { width } = Dimensions.get("window");

const Pedidos = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StartPage />
      </View>
      <View>
        <Text style={styles.sectionTitle}>RETIRAR NA UNIDADE:</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://blog.archtrends.com/wp-content/uploads/2022/11/cafeteriapequenaabre-2.jpeg" }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Shopping Tivoli</Text>
          <Text style={styles.description}>
            R. do Ósmio, 699 - Vila Mollon IV, Santa Bárbara d'Oeste
          </Text>
        </View>
      </View>
      {/* Contêiner centralizado */}
      <View style={styles.centerWrapper}>
        <View style={styles.secondCard}>
          <Text style={styles.cardText}>TEMPO DE PREPARO:</Text>
          {/* Ícone e tempo em uma linha */}
          <View style={styles.timeContainer}>
            <Ionicons name="alarm-outline" size={20} color="#888" />
            <Text style={[styles.time, { fontSize: 20 }]}>40:00</Text>
          </View>
        </View>
        <View style={styles.terceiroCard}>
          <Text style={styles.cardText}>TOTAL DO PEDIDO:</Text>
          <Text style={[styles.time, { fontSize: 20 }]}>R$40,00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#EFE7DD",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFE0CD",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  centerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondCard: {
    backgroundColor: "#EFE0CD",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: width * 0.8,
    height: width * 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  terceiroCard: {
    backgroundColor: "#D8A790",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: width * 0.8,
    height: width * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18, // Aumentei o tamanho da fonte aqui
    fontWeight: "bold",
    marginBottom: 8, // Espaçamento entre o título e o conteúdo
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default Pedidos;
