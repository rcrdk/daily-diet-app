import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Meals } from '@screens/Meals'
import { NewMeal } from '@screens/NewMeal'
import { NewMealMessage } from '@screens/NewMealMessage'
import { Stats } from '@screens/Stats'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="meals" component={Meals} />
      <Screen name="stats" component={Stats} />
      <Screen name="new" component={NewMeal} />
      <Screen name="created" component={NewMealMessage} />
    </Navigator>
  )
}
