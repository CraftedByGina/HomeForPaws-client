import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'perfectpaw_user_id'

export const AuthProvider = ({ children }) => {
  const [userId, setUserIdState] = useState(() => localStorage.getItem(STORAGE_KEY) || '')

  const setUserId = (value) => {
    const nextValue = value.trim()
    setUserIdState(nextValue)

    if (nextValue) {
      localStorage.setItem(STORAGE_KEY, nextValue)
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const value = useMemo(() => ({ userId, setUserId }), [userId])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
