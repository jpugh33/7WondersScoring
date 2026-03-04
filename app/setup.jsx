import { StyleSheet, Text } from 'react-native'
import { useState } from 'react'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import ThemedTextInput from '../components/ThemedTextInput'
import Spacer from '../components/Spacer'

var i = 0

const Setup = () => {
  const [player, setPlayer] = useState('')
  var players = []

  const handleSubmit = () => {
    players[i] = player
    console.log(`Player ${i + 1}: ${player}`)
    i++
  }

  const handleRandomize =() => {
    console.log('randomized')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText>Add a Player</ThemedText>
      <Spacer />

      <ThemedTextInput
        editable={i<7 ? true : false}
        style={{width:'80%', marginBottom:20}}
        placeholder='Player name'
        onChangeText={setPlayer}
        value={player}
      />
      <Spacer />

      <ThemedButton
        disabled={i>6 ? true : false}
        onPress={handleSubmit}
      >
        <Text>Add Player</Text>
      </ThemedButton>
      <Spacer />

      <ThemedButton
        disabled={i>3 && i<7 ? true : false}
        onPress={handleRandomize}
      >
        <Text>Randomize Boards</Text>
      </ThemedButton>
    </ThemedView>
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