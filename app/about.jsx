import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>

      <Link href='/' style={styles.link}>Home Page</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
      marginVertical: 10,
      borderBottomWidth: 1
    }
})