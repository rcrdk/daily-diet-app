import { Loading } from '@components/Loading'
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { Routes } from '@routes/index'
import defaultTheme from '@theme/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <Routes /> : <Loading />}

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
