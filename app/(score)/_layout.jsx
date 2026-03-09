import { Tabs } from "expo-router"
import { Colors } from "../../constants/Colors"
import { useColorScheme } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const DashboardLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTob: 10,
          height: 90
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor
      }}
    >
      <Tabs.Screen 
        name='scorelist'
        options={{ title: 'Scorelist', tabBarIcon: ({ focused }) =>(
          <Ionicons
            size={24}
            name={focused ? 'list-circle-outline' : 'list'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )}}
      />
      <Tabs.Screen 
        name='scorecard'
        options={{ title: 'Scorecard', tabBarIcon: ({ focused }) =>(
          <Ionicons
            size={24}
            name={focused ? 'grid' : 'grid-outline'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )}}
      />
      {/* <Tabs.Screen 
        name='books/[id]'
        options={{ href: null }}
      /> */}
    </Tabs>
  )
}

export default DashboardLayout