import { TouchableWithoutFeedback, Keyboard, StyleSheet, View, TextInput, ScrollView, useColorScheme } from 'react-native'
import { Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'
import { Records } from '../store/records'

import ThemedText from './ThemedText'
import ThemedView from './ThemedView'
import ThemedTextInput from './ThemedTextInput'
import Spacer from './Spacer'

const ThemedGrid = ({
  players = [],
  symbolIcons = [],
  symbolIds = [],
  data = {},
  onChangeCell
}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const boards = Records(s => s.boards)

  // const symbolIcons = [
  //   <Ionicons
  //     size={24}
  //     name={'prism'}
  //     color={'gold'}
  //   />,
  //   <AntDesign
  //     size={24}
  //     name={'dollar-circle'}
  //     color={'gold'}
  //   />,
  //   <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //     <Ionicons
  //       size={24}
  //       name={'shield'}
  //       color={'red'}
  //     />
  //     <View style={{width: 6}} />
  //     <MaterialCommunityIcons
  //       size={24}
  //       name={'octagon'}
  //       color={'red'}
  //     />
  //   </View>,
  //   <MaterialIcons
  //     size={24}
  //     name={'rectangle'}
  //     color={'lightblue'}
  //     style={{ transform: [ {rotate: '90deg'}] }}
  //   />,
  //   <Ionicons
  //     size={24}
  //     name={'ellipse'}
  //     color={'lightyellow'}
  //   />,
  //   <Ionicons
  //     size={24}
  //     name={'triangle'}
  //     color={'lightgreen'}
  //   />,
  //   <Ionicons
  //     size={24}
  //     name={'star'}
  //     color={'violet'}
  //   />
  // ]

  // const symbolIds = [
  //   "wonder",
  //   "coin",
  //   "army",
  //   "blue",
  //   "yellow",
  //   "green",
  //   "purple"
  // ]


  // if (boards.includes('Byzantine')) {
  //   symbolIcons.push(
  //     <Ionicons
  //       size={24}
  //       name={'ellipse-outline'}
  //       color={'gray'}
  //     />
  //   )
  //   symbolIds.push("black")
  // }

  // if (boards.includes('Abu Simbel')) {
  //   symbolIcons.push(
  //     <MaterialIcons
  //       size={24}
  //       name={'face'}
  //       color={'lightgray'}
  //     />
  //   )
  //   symbolIds.push("white")
  // }

  // if (boards.includes('Siracusa')) { 
  //   symbolIcons.push(
  //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //       <MaterialIcons
  //         size={24}
  //         name={'anchor'}
  //         color={'blue'}
  //       />
  //       <View style={{width: 6}} />
  //       <MaterialCommunityIcons
  //         size={24}
  //         name={'pentagon'}
  //         color={'blue'}
  //       />
  //     </View>,
  //     <MaterialCommunityIcons
  //       size={24}
  //       name={'island'}
  //       color={'lightblue'}
  //     />
  //   )
  //   symbolIds.push("navy")
  //   symbolIds.push("island")    
  // }

  // if (boards.includes('Carthage')) {
  //   symbolIcons[1] = (
  //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //       <AntDesign
  //         size={24}
  //         name={'dollar-circle'}
  //         color={'gold'}
  //       />
  //       <View style={{width: 6}} />
  //       <MaterialIcons
  //         size={24}
  //         name={'square'}
  //         color={'grey'}
  //       />
  //     </View>
  //   )
  // }

  // symbolIcons.push(
  //   <MaterialCommunityIcons
  //     size={24}
  //     name={'sigma'}
  //     color={'black'}
  //   />
  // )
  // symbolIds.push("total")

  // const computeTotals = (data, symbolIds, players) => {
  //   const totals = {}

  //   players.forEach(player => {
  //     let sum = 0

  //     symbolIds.forEach(symbol => {
  //       if (symbol === "total") return

  //       const key = `${symbol}_${player}`
  //       const value = parseInt(data[key] || 0, 10)
  //       sum += value
  //     })

  //     totals[`total_${player}`] = sum
  //   })

  //   return totals
  // }

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
            {symbolIds.map((symbol, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                
                {/* Left Symbol Cell */}
                <ThemedView 
                  style={[styles.cell, styles.header]} 
                >
                  <ThemedView style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center' }}>
                    {symbolIcons[rowIndex]}
                  </ThemedView>
                </ThemedView>

                {/* Editable Score Cells */}
                {players.map((player, colIndex) => {
                  const key = `${symbol}_${player}`
                  const value = data[key] ?? ""
                  const isTotalRow = symbol === "total"

                  return (
                    <View key={colIndex} style={styles.cell}>
                      {isTotalRow ? (
                        <ThemedText style={[styles.cell, styles.header]}>
                          {value}
                        </ThemedText>
                      ) : (
                        <ThemedTextInput
                          style={styles.input}
                          keyboardType="number-pad"
                          value={String(value)}
                          onChangeText={text => {
                            const cleaned = text.replace(/[^0-9]/g, "")
                            const normalized = cleaned.replace(/^0+(?=\d)/, "")
                            onChangeCell(symbol, player, normalized)
                          }}
                        />
                      )}
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



export default ThemedGrid
