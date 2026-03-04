import { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

import ThemedCheckBox from '../components/ThemedCheckBox'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import Spacer from '../components/Spacer'

const initialData = [
  { id: 1, label: 'Armada', isChecked: false },
  { id: 2, label: 'Cities', isChecked: false },
  { id: 3, label: 'Edifice', isChecked: false },
  { id: 4, label: 'Leaders', isChecked: false }
]

const Expansions = () => {
  const [listItems, setListItems] = useState(initialData)

  const toggleCheckbox = (id) => {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    )
  }

  const handleSubmit = () => {
    console.log('Expansions submitted')
  }

  const renderItem = ({ item }) => (
    <ThemedCheckBox
      label={item.label}
      isChecked={item.isChecked}
      onPress={() => toggleCheckbox(item.id)}
    />
  )

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Select any expansions.
      </ThemedText>

      <FlatList 
        data={listItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Continue</Text>
      </ThemedButton>

      <Spacer height={100} />
      
    </ThemedView>
  )
}

export default Expansions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        justifyContent: 'center',
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderRadius: 5
    },
    pressed: {
      opacity: 0.8
    }
})