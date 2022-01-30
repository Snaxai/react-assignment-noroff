import React, { createContext, useContext, useState } from "react"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageDelete, storageRead } from "../utils/storage"

type userContextState = {
  user: {
    id?: number
    username?: string
    translations?: Array<string>
  }
  setUser: (user: string) => void
}

const defaultValues: userContextState = {
  user: {},
  setUser: () => "",
}

const UserContext = createContext(defaultValues)

export const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))

  const state = {
    user,
    setUser,
  }

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
}

export default UserProvider
