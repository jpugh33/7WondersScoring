import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: '#ddd' },
        headerTintColor: '#309'
    }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})