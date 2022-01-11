import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { CityComponent } from './CityComponent'
import type { CityFilterBy, CityUpdateType, City } from './types'
import { creators } from './redux/actions'
import { citiesSelector } from './redux/selectors'

export interface CityRendererComponentProps {
  showSearch?: boolean
  cityFilterBy: CityFilterBy
  header: string
}

export const CityRendererComponent = React.memo(({ showSearch, cityFilterBy, header }: CityRendererComponentProps) => {
  const allCities = useSelector(citiesSelector(cityFilterBy))
  const dispatch = useDispatch()
  const [cities, setCities] = useState(allCities)
  const [input, setInput] = useState('')

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setTimeout(() => (setInput(event.target.value), 100)
    setInput(event.target.value)
  }

  const updateCity = (cityId: number, updateType: CityUpdateType) => {
    dispatch(creators.updateCityDetail(cityId, updateType))
  }

  useEffect(() => {
    if (showSearch) {
      const filteredCity: City[] = allCities.filter(city => city.name.toUpperCase().includes(input.toUpperCase()))
      setCities(filteredCity)
    } else {
      setCities(allCities)
    }
  }, [input, allCities.length, cityFilterBy])

  return (
    <VStack spacing="8">
      <Heading as="h1">{header}</Heading>
      {showSearch && (
        <Container maxW="container.md" data-testid="">
          <InputGroup aria-label="search-bar">
            <Input onChange={onInput}  value={input}/>
            <InputRightElement children={<IconButton aria-label="" icon={<Search2Icon />} />} />
          </InputGroup>
        </Container>
      )}
      <CityComponent updateCity={updateCity} cities={cities} />
    </VStack>
  )
})
