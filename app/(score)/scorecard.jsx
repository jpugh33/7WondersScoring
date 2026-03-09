import { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedCheckBox from '../../components/ThemedCheckBox'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

const ScoreCard = () => {
  return (
    <ThemedView>
      <ThemedText>ScoreCard</ThemedText>
    </ThemedView>
  )
}

export default ScoreCard

const styles = StyleSheet.create({})