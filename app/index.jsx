import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import Spacer from '../components/Spacer'

const Home = () => {

  const handleSubmit = () => {
    console.log('Login submitted')
  }
  
  return (
    <ThemedView style={styles.container}>
      <Spacer height={60}/>
      <ThemedLogo />
      <Spacer height={20}/>

      <ThemedText style={styles.title} title={true}>7 Wonders</ThemedText>

      <Spacer height={10} />
      <ThemedText>Scoring App</ThemedText>
      <Spacer />

      <Link href='/expansions' style={styles.link}>
        <ThemedText>Expansions Page</ThemedText>
      </Link>
      <Link href='/setup' style={styles.link}>
        <ThemedText>Setup Page</ThemedText>
      </Link>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Create Scorecard</Text>
      </ThemedButton>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
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