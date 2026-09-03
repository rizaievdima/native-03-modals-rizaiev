import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", description: "Description for Card 1" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 4, title: "Card 4", description: "Description for Card 4" },
  ]);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {cards.map((card) => (
          <Pressable
            key={card.id}
            style={styles.card}
            onPress={() => setSelectedCard(card)}
          >
            <Text style={styles.cardTitle}>{card.title}</Text>
          </Pressable>
        ))}

        <Modal
          visible={!!selectedCard}
          transparent
          animationType="slide"
          onRequestClose={() => setSelectedCard(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedCard?.title}</Text>
              <Text style={styles.modalDescription}>
                {selectedCard?.description}
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setSelectedCard(null)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    height: "93%",
    padding: 16,
    backgroundColor: "#fff",
  },
  modalTitle: {
    fontSize: 16,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  closeButton: {
    borderRadius: 8,
    paddingVertical: 16,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
  },
});

export default App;
