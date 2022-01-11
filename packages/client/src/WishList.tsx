// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import type { FC } from 'react'
// import { useState, useEffect } from 'react'
// import {
//   Container,
//   InputRightElement,
//   Input,
//   Heading,
//   InputGroup,
//   IconButton,
//   VStack,
//   Grid,
//   Box,
//   Button,
// } from '@chakra-ui/react'
// import { Search2Icon } from '@chakra-ui/icons'

// const wishlistedCitiesSelector = state => state.cities.filter(city => city.wishlist)

// // const cityFilter = (state) => state.cities.filter((city) => );

// export const WishList: FC = () => {
//   const allCities = useSelector(wishlistedCitiesSelector)
//   const [cities, setCities] = useState([])
//   const [input, setInput] = useState('')

//   const onInput = event => {
//     console.log(event.target.value)
//     if (event.target.value.length > 3) {
//       setInput(event.target.value)
//     }
//   }

//   const updateCity = (updateType: 'VISITED' | 'WISHLIST', cityId: number) => {}

//   useEffect(() => {
//     console.log(input, 'lll')
//     const fil = allCities.filter(city => city.name.toUpperCase().includes(input.toUpperCase()))
//     setCities(fil)
//   }, [input])

//   return (
//     <VStack spacing="8">
//       <Heading as="h1">WishListed</Heading>
//       <Container maxW="container.md">
//         <InputGroup>
//           <Input onChange={onInput} />
//           <InputRightElement children={<IconButton aria-label="" icon={<Search2Icon />} />} />
//         </InputGroup>
//       </Container>
//       <Grid>
//         {cities &&
//           cities.map(city => (
//             <Box>
//               {city.name}
//               {/* <Button onClick={() => updateConditionalTypeNode(city.id, 'WISHLIST')}> Visited </Button>
//            <Button> Wishlisted </Button> */}
//             </Box>
//           ))}
//       </Grid>
//     </VStack>
//   )
// }
