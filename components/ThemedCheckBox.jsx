import { TouchableOpacity, StyleSheet, useColorScheme } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'

import ThemedText from './ThemedText'

const ThemedCheckBox = ({ label, isChecked, onPress }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <MaterialIcons
        name={isChecked ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={isChecked ? '#f2f5f7' : '#333'}
      />
      <ThemedText style={styles.label} title={false}>{label}</ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  }
})

export default ThemedCheckBox
