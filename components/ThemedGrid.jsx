import { TouchableWithoutFeedback, Keyboard, StyleSheet, View, TextInput, ScrollView, useColorScheme } from 'react-native'
import { Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'
import { Records } from '../store/records'

import ThemedText from './ThemedText'
import ThemedView from './ThemedView'
import ThemedTextInput from './ThemedTextInput'
import Spacer from './Spacer'

const ThemedTable = ({
  players = [],
  data = {},
  onChangeCell

}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const boards = Records(s => s.boards)

  const symbols = [
    <Ionicons
      size={24}
      name={'prism'}
      color={'gold'}
    />,
    <AntDesign
      size={24}
      name={'dollar-circle'}
      color={'gold'}
    />,
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Ionicons
        size={24}
        name={'shield'}
        color={'red'}
      />
      <View style={{width: 6}} />
      <MaterialCommunityIcons
        size={24}
        name={'octagon'}
        color={'red'}
      />
    </View>,
    <MaterialIcons
      size={24}
      name={'rectangle'}
      color={'lightblue'}
      style={{ transform: [ {rotate: '90deg'}] }}
    />,
    <Ionicons
      size={24}
      name={'ellipse'}
      color={'lightyellow'}
    />,
    <Ionicons
      size={24}
      name={'triangle'}
      color={'lightgreen'}
    />,
    <Ionicons
      size={24}
      name={'star'}
      color={'violet'}
    />
  ]

  if (boards.includes('Byzantine')) {
    symbols.push(
      <Ionicons
        size={24}
        name={'ellipse-outline'}
        color={'gray'}
      />
    )
  }

  if (boards.includes('Abu Simbel')) {
    symbols.push(
      <MaterialIcons
        size={24}
        name={'face'}
        color={'lightgray'}
      />
    )
  }

  if (boards.includes('Siracusa')) { 
    symbols.push(
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcons
          size={24}
          name={'anchor'}
          color={'blue'}
        />
        <View style={{width: 6}} />
        <MaterialCommunityIcons
          size={24}
          name={'pentagon'}
          color={'blue'}
        />
      </View>,
      <MaterialCommunityIcons
        size={24}
        name={'island'}
        color={'lightblue'}
      />
    )
  }

  if (boards.includes('Carthage')) {
    symbols[1] = (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign
          size={24}
          name={'dollar-circle'}
          color={'gold'}
        />
        <View style={{width: 6}} />
        <MaterialIcons
          size={24}
          name={'square'}
          color={'grey'}
        />
      </View>
    )
  }

  symbols.push(
    <MaterialCommunityIcons
      size={24}
      name={'sigma'}
      color={'black'}
    />
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{ flex: 1 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ThemedView style={styles.container}>

            {/* Top Header Row */}
            <View style={styles.row}>
              <View style={styles.cornerCell} />
              {players.map((p, i) => (
                <ThemedText key={i} style={[styles.cell, styles.header]}>
                  {p}
                </ThemedText>
              ))}
            </View>

            {/* Symbol Rows */}
            {symbols.map((symbol, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                
                {/* Left Symbol Cell */}
                <ThemedView 
                  style={[styles.cell, styles.header]} 
                >
                  <ThemedView style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center' }}>
                    {symbol}
                  </ThemedView>
                </ThemedView>

                {/* Editable Score Cells */}
                {players.map((player, colIndex) => {
                  const key = `${symbol}_${player}`
                  const value = data[key] ?? ""

                  return (
                    <View key={colIndex} style={styles.cell}>
                      <ThemedTextInput
                        style={styles.input}
                        keyboardType="number-pad"
                        defaultValue="0"
                        value={String(value)}
                        onChangeText={text => onChangeCell(symbol, player, text)}
                      />
                    </View>
                  )
                })}
              </View>
            ))}

          </ThemedView>
        </ScrollView>
      </ScrollView>
    </TouchableWithoutFeedback>
  )

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20'
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  cell: {
    width: 80,
    padding: 8
  },
  cornerCell: {
    width: 80
  },
  header: {
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 6,
    borderRadius: 4
  }
})



export default ThemedTable
