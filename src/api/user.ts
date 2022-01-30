// Api stuff
import { createHeaders, handleResponse } from "./index"

const apiUrl = process.env.REACT_APP_API_URL

const checkForUser = async (username: string) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`)

    if (!response.ok) throw new Error("could not complete request")

    const data = await response.json()

    return [null, data]
  } catch (error: any) {
    return [error.message, []]
  }
}

const createUser = async (username: string) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    })
    if (!response.ok)
      throw new Error("Could not create a new user with username " + username)

    const data = await response.json()
    return [null, data]
  } catch (error: any) {
    return [error.message, []]
  }
}

export const loginUser = async (username: string) => {
  const [checkError, user] = await checkForUser(username)

  if (checkError !== null) return [checkError, null]
  if (user.length > 0) return [null, user.pop()]

  return await createUser(username)
}

export const addTranslationToUser = async (
  userId: number,
  translations: string[]
) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: translations,
      }),
    })
    if (!response.ok) throw new Error("Could not update translation history")

    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

export const clearTranslationHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    })
    if (!response.ok) throw new Error("Could not update translation history")

    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}
