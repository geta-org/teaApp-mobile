import { NavButtons, NavMenu } from './styles'
import HomeIcone from '../../assets/NavBar/HomeNav.svg'
import { useNavigation } from '@react-navigation/native'
export function NavigaterMenu() {
  const navigation = useNavigation()

  const MenuButton = () => {
    navigation.navigate('mainMenu')
  }

  return (
    <NavMenu>
      <NavButtons onPress={MenuButton}>
        <HomeIcone />
      </NavButtons>
    </NavMenu>
  )
}
