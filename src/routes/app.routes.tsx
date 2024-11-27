import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from '@screens/Details'
import { Meals } from '@screens/Meals'
import { Create } from '@screens/Create'
import { NewMealMessage } from '@screens/NewMealMessage'
import { Stats } from '@screens/Stats'
import { Edit } from '@screens/Edit'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="meals" component={Meals} />
      <Screen name="stats" component={Stats} />
      <Screen name="create" component={Create} />
      <Screen name="created" component={NewMealMessage} />
      <Screen name="details" component={Details} />
      <Screen name="edit" component={Edit} />
    </Navigator>
  )
}
