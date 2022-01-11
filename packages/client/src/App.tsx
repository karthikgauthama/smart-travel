import type { FC } from 'react'
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { TopBar } from './TopBar'
import { CityRendererComponent } from './CityRendererComponent'
import { store } from './redux/store'
import { creators } from './redux/actions'

const fonts = {
  heading:
    '"Museo Sans", museo-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  body: '"Lato", lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  // chakra default
  mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

store.dispatch(creators.fetchCities())

export const App: FC = () => (
  <ChakraProvider theme={extendTheme({ fonts })}>
    <TopBar />
    <Box textAlign="center">
      <Routes>
        <Route index element={<CityRendererComponent cityFilterBy="all" header="Smart Traveller" showSearch />} />
        <Route path="wish-list" element={<CityRendererComponent cityFilterBy="wishlist" header="Wish-Listed" />} />
        <Route path="visited" element={<CityRendererComponent cityFilterBy="visited" header="Visited" />} />
      </Routes>
    </Box>
  </ChakraProvider>
)
