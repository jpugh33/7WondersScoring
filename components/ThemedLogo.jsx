import { Image, useColorScheme } from 'react-native'

import DarkLogo from '../assets/favicon.png'
import LightLogo from '../assets/favicon.png'

const ThemedLogo = ({...props}) => {
  const colorScheme = useColorScheme()

  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo