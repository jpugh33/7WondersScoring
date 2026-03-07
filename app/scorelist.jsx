import { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { Colors } from '../constants/Colors'

import ThemedCheckBox from '../components/ThemedCheckBox'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import Spacer from '../components/Spacer'

const ScoreList = () => {
  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        List of Players
      </ThemedText>
      <Spacer />

      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>Player Name</ThemedText>
              <ThemedText>Wonder Board</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />

    </ThemedView>
  )
}

export default ScoreList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  card: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
})