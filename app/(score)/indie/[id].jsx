import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Colors } from '../../../constants/Colors'
import { Records } from '../../../store/records'

// themed components
import ThemedText from "../../../components/ThemedText"
import ThemedView from "../../../components/ThemedView"
import ThemedButton from "../../../components/ThemedButton"
import ThemedCard from "../../../components/ThemedCard"
import ThemedLoader from "../../../components/ThemedLoader"
import Spacer from "../../../components/Spacer"

const IndieScore = () => {
    const { id } = useLocalSearchParams()
    const router = useRouter()

    const places = Records(s => s.places)
    const place = places.find(p => p.id === Number(id))

    const handleDelete = () => {
        router.replace('/scorelist')
    }

    // useEffect(() => {
    //     async function loadBook() {
    //         const bookData = await fetchBookByID(id)
    //         setBook(bookData)
    //     }

    //     loadBook()
    // }, [id])

    // if (!book) {
    //     return (
    //       <ThemedView safe={true} style={styles.container}>
    //         <ThemedLoader />
    //       </ThemedView>
    //     )
    // }

    return (
        <ThemedView safe={true} style={styles.container}>
          <ThemedCard style={styles.card}>
            <ThemedText style={styles.title}>{place.player}</ThemedText>
            <ThemedText>{place.board}</ThemedText>
            <Spacer />

            <ThemedText title={true}>Book Description:</ThemedText>
            <Spacer height={10} />

            <ThemedText>Scores</ThemedText>
          </ThemedCard>

          <ThemedButton style={styles.delete} onPress={handleDelete}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>
              Back to List
            </Text>
          </ThemedButton>
        </ThemedView>
  )
}

export default IndieScore

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch"
    },
    title: {
        fontSize: 22,
        marginVertical: 10
    },
    card: {
        margin: 20
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center'
    }
})