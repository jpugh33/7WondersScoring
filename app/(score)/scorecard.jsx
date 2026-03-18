import { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Records } from '../../store/records'

import ThemedCheckBox from '../../components/ThemedCheckBox'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedGrid from '../../components/ThemedGrid'
import Spacer from '../../components/Spacer'

const ScoreCard = () => {

  const players = Records(s => s.players)
  const boards = Records(s => s.boards)
  const places = Records(s => s.places)
  const addPlayer = Records(s => s.addPlayer)
  const setBoardsGlobal = Records(s => s.setBoards)
  const setPlaces = Records(s => s.setPlaces)
  const symbols = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]

  const [scores, setScores] = useState({})

  const handleChangeCell = (symbol, player, value) => {
    const key = `${symbol}_${player}`
    setScores(prev => ({ ...prev, [key]: value }))
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedGrid
        players={players}
        symbols={symbols}
        data={scores}
        onChangeCell={handleChangeCell}
      />
    </ThemedView>
  )
}

export default ScoreCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  }
})