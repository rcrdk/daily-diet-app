import { Button } from '@components/Button'
import { Content } from '@components/Content'
import { ContentScrollable } from '@components/ContentScrollable'
import { DietSwitcher } from '@components/DietSwitcher'
import { Heading } from '@components/Heading'
import { Input } from '@components/Input'
import { InputGroup } from '@components/InputGroup'
import { Label } from '@components/Label'
import { Loading } from '@components/Loading'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { editMeal } from '@storage/meals/editMeal'
import { getMeal } from '@storage/meals/getMeal'
import { AppError } from '@utils/app-error'
import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import { Container, DateHourRow, DietOptionsRow } from './styles'

type RouteParams = {
  id: string
}

export function Edit() {
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('Sanduiche')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet')
  const [date, setDate] = useState('00/00/0000')
  const [hour, setHour] = useState('00:00')
  const [isOnDiet, setOnDiet] = useState<boolean>(false)

  const navigation = useNavigation()
  const { params } = useRoute()
  const { id } = params as RouteParams

  function handleChangeIsOnDiet(option: boolean) {
    setOnDiet(option)
  }

  async function handleEditMeal() {
    try {
      await editMeal({ id, name, description, date, hour, onDiet: isOnDiet })

      navigation.navigate('meals')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar refeição', error.message)
      } else {
        Alert.alert(
          'Editar refeição',
          'Não foi possível editar a refeição. Tente novamente mais tarde.',
        )
        console.error(error)
      }
    }
  }

  async function fetchMeal() {
    try {
      setIsLoading(true)
      const data = await getMeal(id)

      setName(data.name)
      setDescription(data.description)
      setDate(data.date)
      setHour(data.hour)
      setOnDiet(data.onDiet)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar refeição', error.message)
      } else {
        Alert.alert(
          'Editar refeição',
          'Não foi possível editar a refeição. Tente novamente mas tarde.',
        )
        console.error(error)
      }
      navigation.goBack()
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  )

  return (
    <Container>
      <Heading title="Editar refeição" />

      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ContentScrollable>
              <InputGroup>
                <Label>Nome:</Label>
                <Input
                  value={name}
                  onChangeText={setName}
                  enterKeyHint="next"
                />
              </InputGroup>

              <InputGroup>
                <Label>Descrição:</Label>
                <Input
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  textAlignVertical="top"
                  numberOfLines={3}
                />
              </InputGroup>

              <DateHourRow>
                <InputGroup style={{ flexGrow: 1 }}>
                  <Label>Data:</Label>
                  <Input value={date} onChangeText={setDate} />
                </InputGroup>

                <InputGroup style={{ flexGrow: 1 }}>
                  <Label>Hora:</Label>
                  <Input value={hour} onChangeText={setHour} />
                </InputGroup>
              </DateHourRow>

              <InputGroup style={{ flexGrow: 1 }}>
                <Label>Está dentro da dieta?</Label>
                <DietOptionsRow>
                  <DietSwitcher
                    label="Sim"
                    color="green"
                    isActive={isOnDiet}
                    onSelectOption={() => handleChangeIsOnDiet(true)}
                  />
                  <DietSwitcher
                    label="Não"
                    color="red"
                    isActive={isOnDiet}
                    onSelectOption={() => handleChangeIsOnDiet(false)}
                  />
                </DietOptionsRow>
              </InputGroup>
            </ContentScrollable>

            <Button label="Salvar alterações" onPress={handleEditMeal} />
          </>
        )}
      </Content>
    </Container>
  )
}
