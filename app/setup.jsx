import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { setBoards } from './expansions'
import { useRouter, useLocalSearchParams } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import ThemedTextInput from '../components/ThemedTextInput'
import Spacer from '../components/Spacer'

var players = []

const Setup = () => {
  var boards
  const { expansions } = useLocalSearchParams()
  const selectedExpansions = expansions ? JSON.parse(expansions) : []
  const [player, setPlayer] = useState('')

  const handleSubmit = () => {
    if (player === 'null' || players.includes(player)) {
      console.log("error: no value or player already exists")
      return
    }
    players.push(player)
    console.log(players)
    setPlayer('')
  }

  const handleRandomize =() => {
    boards = setBoards(selectedExpansions)
    console.log(boards, players.length)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText>Add a Player</ThemedText>
        <Spacer />

        <ThemedTextInput
          editable={players.length<7 ? true : false}
          style={{width:'80%', marginBottom:20}}
          placeholder='Player name'
          onChangeText={setPlayer}
          value={player}
        />
        <Spacer />

        <ThemedButton
          disabled={players.length>6 ? true : false}
          onPress={handleSubmit}
        >
          <Text>Add Player</Text>
        </ThemedButton>
        <Spacer />

        <ThemedButton
          disabled={players.length>=3 ? false : true}
          onPress={handleRandomize}
        >
          <Text>Randomize Boards</Text>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Setup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})