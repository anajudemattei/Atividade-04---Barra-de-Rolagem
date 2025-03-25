import React from "react";
import { ScrollView, FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function App() {
  const data = [
    { id: "1", title: "Bolinha 1" },
    { id: "2", title: "Bolinha 2" },
    { id: "3", title: "Bolinha 3" },
    { id: "4", title: "Bolinha 4" },
    { id: "5", title: "Bolinha 5" },
    { id: "6", title: "Bolinha 6" },
    { id: "7", title: "Bolinha 7" },
    { id: "8", title: "Bolinha 8" },
    { id: "9", title: "Bolinha 9" },
    { id: "10", title: "Bolinha 10" },
    { id: "11", title: "Bolinha 11" },
    { id: "12", title: "Bolinha 12" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
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
  },
  item: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
  },
  title: {
    fontSize: 16,
  },
});