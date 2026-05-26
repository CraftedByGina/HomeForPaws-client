import { apiRequest } from '../api/client'

export const getPets = () => apiRequest('/api/pets')

export const getPetById = (petId) => apiRequest(`/api/pets/${petId}`)

export const createPet = (petData, userId) =>
  apiRequest('/api/pets', {
    method: 'POST',
    headers: { 'x-user-id': userId },
    body: JSON.stringify(petData),
  })

export const deletePet = (petId, userId) =>
  apiRequest(`/api/pets/${petId}`, {
    method: 'DELETE',
    headers: { 'x-user-id': userId },
  })
