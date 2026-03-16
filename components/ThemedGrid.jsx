import { TouchableOpacity, StyleSheet, View, TextInput, ScrollView, useColorScheme } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'

import ThemedText from './ThemedText'
import ThemedView from './ThemedView'
import ThemedTextInput from './ThemedTextInput'

const ThemedTable = ({
  players = [],
  data = {},
  onChangeCell

}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const symbols = [
    <Ionicons
      size={24}
      name={'prism'}
      // color={focused ? theme.iconColorFocused : theme.iconColor}
    />,
    <Ionicons
      size={24}
      name={'ellipse'}
      // color={focused ? theme.iconColorFocused : theme.iconColor}
    />
  ]

  return (
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
              <ThemedText style={[styles.cell, styles.header]}>
                {symbol}
              </ThemedText>

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
  )

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10
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
