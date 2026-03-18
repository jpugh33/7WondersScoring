import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../../../constants/Colors'
import { Records } from '../../../store/records'

// themed components
import ThemedText from "../../../components/ThemedText"
import ThemedView from "../../../components/ThemedView"
import ThemedButton from "../../../components/ThemedButton"
import ThemedCard from "../../../components/ThemedCard"
import ThemedLoader from "../../../components/ThemedLoader"
import ThemedGrid from '../../../components/ThemedGrid'
import Spacer from "../../../components/Spacer"

const IndieScore = () => {
    const { id } = useLocalSearchParams()
    const router = useRouter()
    const [score, setScore] = useState({})

    const boards = Records(s => s.boards)
    const places = Records(s => s.places)
    const place = places.find(p => p.id === Number(id))

    const symbolIcons = [
      <Ionicons
        size={24}
        name={'prism'}
        color={'gold'}
      />,
      <AntDesign
        size={24}
        name={'dollar-circle'}
        color={'gold'}
      />,
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Ionicons
        size={24}
        name={'shield'}
        color={'red'}
      />
      <View style={{width: 6}} />
      <MaterialCommunityIcons
        size={24}
        name={'octagon'}
        color={'red'}
      />
      </View>,
      <MaterialIcons
        size={24}
        name={'rectangle'}
        color={'lightblue'}
        style={{ transform: [ {rotate: '90deg'}] }}
      />,
      <Ionicons
        size={24}
        name={'ellipse'}
        color={'lightyellow'}
      />,
      <Ionicons
        size={24}
        name={'triangle'}
        color={'lightgreen'}
      />,
      <Ionicons
        size={24}
        name={'star'}
        color={'violet'}
      />
    ]

    const symbolIds = [
        "wonder",
        "coin",
        "army",
        "blue",
        "yellow",
        "green",
        "purple"
    ]

    if (boards.includes('Byzantine')) {
        symbolIcons.push(
        <Ionicons
            size={24}
            name={'ellipse-outline'}
            color={'gray'}
        />
        )
        symbolIds.push("black")
    }

    if (boards.includes('Abu Simbel')) {
        symbolIcons.push(
        <MaterialIcons
            size={24}
            name={'face'}
            color={'lightgray'}
        />
        )
        symbolIds.push("white")
    }

    if (boards.includes('Siracusa')) { 
        symbolIcons.push(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons
            size={24}
            name={'anchor'}
            color={'blue'}
            />
          <View style={{width: 6}} />
          <MaterialCommunityIcons
            size={24}
            name={'pentagon'}
            color={'blue'}
            />
        </View>,
        <MaterialCommunityIcons
          size={24}
          name={'island'}
          color={'lightblue'}
        />
        )
        symbolIds.push("navy")
        symbolIds.push("island")    
    }

    if (boards.includes('Carthage')) {
        symbolIcons[1] = (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign
              size={24}
              name={'dollar-circle'}
              color={'gold'}
              />
            <View style={{width: 6}} />
            <MaterialIcons
              size={24}
              name={'square'}
              color={'grey'}
              />
          </View>
        )
    }

    symbolIcons.push(
      <MaterialCommunityIcons
        size={24}
        name={'sigma'}
        color={'black'}
      />
    )
    symbolIds.push("total")

    const handleDelete = () => {
      console.log(place.player)
      router.replace('/scorelist')
    }

    useEffect(() => {
      const initial = {}

      symbolIds.forEach(symbol => {
        const key = `${symbol}_${place.player}`
        initial[key] = ""
      })

      setScore(initial)
    }, [])

    const computeTotals = (data, symbolIds, players) => {
        const totals = {}

        players.forEach(player => {
        let sum = 0

        symbolIds.forEach(symbol => {
            if (symbol === "total") return

            const key = `${symbol}_${player}`
            const value = parseInt(data[key] || 0, 10)
            sum += value
        })

        totals[`total_${player}`] = sum
        })

        return totals
    }

    const handleChangeCell = (symbol, player, value) => {
        const key = `${symbol}_${player}`

        // update base score
        setScore(prev => {
        const updated = { ...prev, [key]: value }

        // compute totals AFTER updating
        const totals = computeTotals(updated, symbolIds, [place.player])

        // merge totals into updated data
        const merged = { ...updated, ...totals }

        return merged
        })
    }

    return (
        <ThemedView safe={true} style={styles.container}>
          <Spacer />
          <ThemedCard style={styles.card}>
            <ThemedText style={styles.title}>{place.player}</ThemedText>
            <ThemedText>{place.board}</ThemedText>
            <Spacer />

            <ThemedGrid
              players={[place.player]}
              symbolIcons={symbolIcons}
              symbolIds={symbolIds}
              data={score}
              onChangeCell={handleChangeCell}
            />

            <ThemedText>Score</ThemedText>
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