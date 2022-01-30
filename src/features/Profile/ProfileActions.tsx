import React, { useState } from "react"
import { clearTranslationHistory } from "../../api/user"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../contextStore/UserContext"
import { storageDelete } from "../../utils/storage"

const ProfileActions = () => {
  const { user, setUser } = useUser()

  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const logout = () => {
    storageDelete(STORAGE_KEY_USER)
    setUser(null)
  }

  const clearHistoryClick = async () => {
    setIsLoading(true)
    const [error, response] = await clearTranslationHistory(user.id)
    if (error !== null) setErrorMessage(error)
    if (response !== null) {
      setUser(response)
    }
    setIsLoading(false)
  }

  return (
    <>
      <button disabled={user.translations.length > 0 ? false : true} onClick={clearHistoryClick}>Clear history</button>
      <button onClick={logout}>Logout</button>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
}

export default ProfileActions
