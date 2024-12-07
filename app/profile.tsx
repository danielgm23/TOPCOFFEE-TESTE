import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// Obtendo a largura e altura da tela
const { width, height } = Dimensions.get("window");

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Foto de perfil redonda */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://i0.wp.com/messias.io/wp-content/uploads/2024/07/449724904_424767280563203_8119326073767375630_n.jpeg?fit=1023%2C1023&ssl=1" }} // Substitua pela URL da imagem
          style={styles.profileImage}
        />
      </View>

      {/* Título da tela */}
      <Text style={styles.title}>Perfil</Text>

      {/* Opções de menu */}
      <View style={styles.optionsContainer}>
        {/* Pedidos Anteriores */}
        <TouchableOpacity style={styles.option}>
          <Ionicons name="cart-outline" size={24} color="#555" />
          <Text style={styles.optionText}>Pedidos Anteriores</Text>
        </TouchableOpacity>

        {/* Suporte */}
        <TouchableOpacity style={styles.option}>
          <Ionicons name="help-circle-outline" size={24} color="#555" />
          <Text style={styles.optionText}>Suporte</Text>
        </TouchableOpacity>

        {/* Configurações */}
        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={24} color="#555" />
          <Text style={styles.optionText}>Configurações</Text>
        </TouchableOpacity>

        {/* Botão de Sair */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#EFE7DD",
    alignItems: "center",
  },
  profileContainer: {
    marginTop: height * 0.05, // Ajuste da margem superior baseado na altura da tela
    alignItems: "center",
  },
  profileImage: {
    width: width * 0.3, // Ajustando o tamanho da imagem baseado na largura da tela
    height: width * 0.3, // Usando a mesma largura para manter a proporção da imagem
    borderRadius: width * 0.15, // Metade da largura para manter a imagem redonda
    borderWidth: 3,
    borderColor: "#555",
  },
  title: {
    fontSize: width * 0.06, // Tamanho de fonte proporcional à largura da tela
    fontWeight: "bold",
    marginVertical: 20,
  },
  optionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFE0CD",
    padding: width * 0.05, // Ajustando o padding proporcional à largura da tela
    borderRadius: 8,
    width: "90%", // Fazendo a opção ocupar 90% da largura da tela
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: width * 0.05, // Ajuste no tamanho da fonte
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: "red",
    padding: width * 0.05, // Ajuste proporcional ao tamanho da tela
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontSize: width * 0.05, // Ajustando o tamanho da fonte
    fontWeight: "bold",
  },
});

export default ProfileScreen;
