import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedCheckBox from '../../components/ThemedCheckBox'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

const ScoreList = () => {
  const { places } = useLocalSearchParams()
  const cities = places ? JSON.parse(places) : [{"id": 1, "leader": "Belle", "wonder": "Rhodos"}, {"id": 2, "leader": "Jasmine", "wonder": "Halikarnassos"}, {"id": 3, "leader": "Aurora", "wonder": "Ephesos"}, {"id": 4, "leader": "Ariel", "wonder": "Olympia"}, {"id": 5, "leader": "Alice", "wonder": "Siracusa"}, {"id": 6, "leader": "Megara", "wonder": "Gizah"}, {"id": 7, "leader": "Merida", "wonder": "Babylon"}]

  console.log(cities)

  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        List of Players
      </ThemedText>
      <Spacer />

      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <Pressable onPress>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.leader}</ThemedText>
              <ThemedText>{item.wonder}</ThemedText>
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