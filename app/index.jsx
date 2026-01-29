import { StyleSheet, Text, View, Image } from 'react-native'

import Logo from '../assets/favicon.png'

const Home = () => {
  return (
    <View style={styles.container}>

    <Image source={Logo} style={styles.img}></Image>

      <Text style={styles.title}>7 Wonders</Text>

      <Text style={{marginTop: 10, marginBottom: 30}}>Scoring App</Text>

    </View>
  )
}

export default Home

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
    img: {
        marginVertical: 20
    }
})