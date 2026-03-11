import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { setBoards } from './expansions'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { Records } from '../store/records'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import ThemedTextInput from '../components/ThemedTextInput'
import Spacer from '../components/Spacer'

const createPlace = (id, player, board) => ({ id, player, board })

const Setup = () => {
  const { expansions } = useLocalSearchParams()
  const selectedExpansions = expansions ? JSON.parse(expansions) : []
  const [player, setPlayer] = useState('')
  const router = useRouter()

  const players = Records(s => s.players)
  const addPlayer = Records(s => s.addPlayer)
  const setBoardsGlobal = Records(s => s.setBoards)
  const setPlaces = Records(s => s.setPlaces)


  const handleSubmit = () => {
    if (player === 'null' || players.includes(player)) {
      console.log("error: no value or player already exists")
      return
    }
    addPlayer(player)
    console.log(players)
    setPlayer('')
  }

  const handleRandomize = () => {
    const baseBoards = Records.getState().boards
    const expansionBoards = setBoards(selectedExpansions)
    const allBoards = [...baseBoards, ...expansionBoards]

    setBoardsGlobal(allBoards)

    let availableBoards = [...allBoards]

    let cities = []
    for (let i=0; i<players.length; i++) {
      let num = Math.floor(Math.random() * availableBoards.length)
      cities.push(createPlace(i+1, players[i], availableBoards[num]))
      availableBoards.splice(num, 1)
    }
    console.log(availableBoards)
    setPlaces(cities)

    router.push('/scorelist')
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