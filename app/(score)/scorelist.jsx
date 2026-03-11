import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Records } from '../../store/records'

import ThemedCheckBox from '../../components/ThemedCheckBox'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

const ScoreList = () => {
  // const { places } = useLocalSearchParams()
  // const places = places ? JSON.parse(places) : []
  const router = useRouter()

  const players = Records(s => s.players)
  const boards = Records(s => s.boards)
  const places = Records(s => s.places)
  const addPlayer = Records(s => s.addPlayer)
  const setBoardsGlobal = Records(s => s.setBoards)
  const setPlaces = Records(s => s.setPlaces)

  console.log(places)

  function handlePress(id) {
    router.push(`/indie/${id}`)
  }

  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        List of Players
      </ThemedText>
      <Spacer />

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <Pressable onPress={() => handlePress(item.id)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.player}</ThemedText>
              <ThemedText>{item.board}</ThemedText>
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