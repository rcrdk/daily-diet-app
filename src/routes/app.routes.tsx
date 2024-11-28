import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Create } from '@screens/Create'
import { Details } from '@screens/Details'
import { Edit } from '@screens/Edit'
import { Meals } from '@screens/Meals'
import { NewMealMessage } from '@screens/NewMealMessage'
import { Stats } from '@screens/Stats'

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
