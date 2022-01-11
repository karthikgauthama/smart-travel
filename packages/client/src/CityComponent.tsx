import * as React from 'react'
import { Box, Button, Grid } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import type { City, CityUpdateType } from './types'

export interface CityComponentProps {
  cities: City[]
  updateCity: (cityId: number, updateType: CityUpdateType) => void
}

export const CityComponent = React.memo(({ cities, updateCity }: CityComponentProps) => (
  <>
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {cities &&
        cities.map(city => (
          <div id={`${city.id}`} data-testid="city-box">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  {city.name}
                </Box>
                <Box>
                  <Box as="span" color="gray.600" fontSize="sm">
                    {city.country}
                  </Box>
                </Box>
              </Box>
              <Box gap="2">
                <Button
                  onClick={() => updateCity(city.id, 'VISITED')}
                  rightIcon={<StarIcon color={city.visited ? 'yellow.500' : 'grey.300'} />}
                  variant="ghost"
                >
                  {'Visited'}
                </Button>
                <Button
                  onClick={() => updateCity(city.id, 'WISHLIST')}
                  rightIcon={<StarIcon color={city.wishlist ? 'yellow.500' : 'grey.300'} />}
                  variant="ghost"
                >
                  {'Wishlist'}
                </Button>
              </Box>
            </Box>
          </div>
        ))}
    </Grid>
  </>
))
