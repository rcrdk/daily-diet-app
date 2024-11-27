import { Container, DateHourRow, DietOptionsRow } from './styles'
import { Heading } from '@components/Heading'
import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { Content } from '@components/Content'

import { ContentScrollable } from '@components/ContentScrollable'
import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { InputGroup } from '@components/InputGroup'
import { DietSwitcher } from '@components/DietSwitcher'

type RouteParams = {
  id: string
}

export function Edit() {
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

  function handleEditMeal() {
    navigation.navigate('details', { id })
  }

  return (
    <Container>
      <Heading title="Editar refeição" />

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

        <Button label="Salvar alterações" onPress={handleEditMeal} />
      </Content>
    </Container>
  )
}
