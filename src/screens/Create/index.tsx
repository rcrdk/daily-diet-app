import { Button } from '@components/Button'
import { Content } from '@components/Content'
import { ContentScrollable } from '@components/ContentScrollable'
import { DietSwitcher } from '@components/DietSwitcher'
import { Heading } from '@components/Heading'
import { Input } from '@components/Input'
import { InputGroup } from '@components/InputGroup'
import { Label } from '@components/Label'
import { useNavigation } from '@react-navigation/native'
import { createMeal } from '@storage/meals/createMeal'
import { AppError } from '@utils/app-error'
import { useState } from 'react'
import { Alert } from 'react-native'

import { Container, DateHourRow, DietOptionsRow } from './styles'

export function Create() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [isOnDiet, setOnDiet] = useState<boolean>()

  const navigation = useNavigation()

  function handleChangeIsOnDiet(option: boolean) {
    setOnDiet(option)
  }

  async function handleCreateNewMeal() {
    try {
      await createMeal({ name, description, date, hour, onDiet: isOnDiet })

      navigation.navigate('created', { isOnDiet: String(isOnDiet) })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert(
          'Nova refeição',
          'Não foi possível adicionar uma nova refeição. Tente novamente mais tarde.',
        )
        console.error(error)
      }
    }
  }

  return (
    <Container>
      <Heading title="Nova refeição" />

      <Content>
        <ContentScrollable>
          <InputGroup>
            <Label>Nome:</Label>
            <Input value={name} onChangeText={setName} enterKeyHint="next" />
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

        <Button label="Cadastrar refeição" onPress={handleCreateNewMeal} />
      </Content>
    </Container>
  )
}
