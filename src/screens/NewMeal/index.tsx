import { Container, DateHourRow, DietOptionsRow } from './styles'
import { Heading } from '@components/Heading'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Content } from '@components/Content'

import { ContentScrollable } from '@components/ContentScrollable'
import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { InputGroup } from '@components/InputGroup'
import { DietSwitcher } from '@components/DietSwitcher'

export function NewMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [isOnDiet, setOnDiet] = useState<boolean>()

  const navigation = useNavigation()

  function handleChangeIsOnDiet(option: boolean) {
    setOnDiet(option)
  }

  function handleBackNavigation() {
    navigation.navigate('meals')
  }

  function handleCreateNewMeal() {
    if (isOnDiet === undefined) return

    navigation.navigate('created', { isOnDiet: String(isOnDiet) })
  }

  return (
    <Container>
      <Heading title="Nova refeição" onBackNavigation={handleBackNavigation} />

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
