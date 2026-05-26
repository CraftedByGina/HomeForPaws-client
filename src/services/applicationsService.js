import { apiRequest } from '../api/client'

export const submitApplication = ({ petId, message, userId }) =>
  apiRequest('/api/applications', {
    method: 'POST',
    headers: { 'x-user-id': userId },
    body: JSON.stringify({ petId, message }),
  })

export const getApplications = (userId) =>
  apiRequest('/api/applications', {
    headers: { 'x-user-id': userId },
  })

export const submitCourseQuiz = ({ applicationId, userId, answers }) =>
  apiRequest(`/api/applications/${applicationId}/course`, {
    method: 'PATCH',
    headers: { 'x-user-id': userId },
    body: JSON.stringify({ answers }),
  })
