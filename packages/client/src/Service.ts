import type { City } from './types'

class Service {
  /**
   * Fetches City from the REST Api
   * @returns
   */
  getCities = (): Promise<City[]> => {
    return fetch('http://localhost:4000/rest/cities', { method: 'GET' })
      .then(response => response)
      .then(response => response.json())
  }

  /**
   *
   * @param city Updates City to Visited/Wishlisted its a PUT call
   * @returns
   */
  updateCity = (city: City): Promise<City[]> => {
    return fetch(`http://localhost:4000/rest/cities/${city.id}`, { method: 'PUT', body: JSON.stringify(city) })
      .then(response => response)
      .then(response => response.json())
  }
}

export const serviceInstance = new Service()
