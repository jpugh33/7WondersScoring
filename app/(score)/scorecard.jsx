import { useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedCheckBox from '../../components/ThemedCheckBox'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedGrid from '../../components/ThemedGrid'
import Spacer from '../../components/Spacer'

const ScoreCard = () => {
  const players = ["Joshua", "Sarah", "Mike", "Alice", "Molly", "Calla", "Audrey"]
  const symbols = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]

  const [scores, setScores] = useState({})

  const handleChangeCell = (symbol, player, value) => {
    const key = `${symbol}_${player}`
    setScores(prev => ({ ...prev, [key]: value }))
  }

  return (
    <ThemedGrid
      players={players}
      symbols={symbols}
      data={scores}
      onChangeCell={handleChangeCell}
    />
  )
}

export default ScoreCard

const styles = StyleSheet.create({})