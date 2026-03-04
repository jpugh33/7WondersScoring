import { TouchableOpacity, StyleSheet } from 'react-native'
// You'll need to install expo vector icons, e.g., expo install @expo/vector-icons
import { MaterialIcons } from '@expo/vector-icons'
import ThemedText from './ThemedText'



const ThemedCheckBox = ({ label, isChecked, onPress }) => {
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
