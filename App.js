import React from "react";
import { ScrollView, FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function App() {
  const data = [
    { id: "1", title: "Morango" },
    { id: "2", title: "Manga" },
    { id: "3", title: "Uva Verde" },
    { id: "4", title: "Banana" },
    { id: "5", title: "Água com gás" },
    { id: "6", title: "Arroz" },
    { id: "7", title: "Peixe" },
    { id: "8", title: "Chocolate" },
    { id: "9", title: "Macarrão" },
    { id: "10", title: "Melancia" },
    { id: "11", title: "Tomate" },
    { id: "12", title: "Beterraba" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
        <Text style={styles.title}>Lista de Compras🛍</Text>
      <ScrollView>
        {data.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#f08080",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
});