import React, { useEffect, useState } from "react"
import { addTranslationToUser, loginUser } from "../../api/user"
import { useUser } from "../../contextStore/UserContext"
import TranslationSigns from "./TranslationSigns"

const Translation = () => {
  const { user, setUser } = useUser()

  const [userInput, setUserInput] = useState<string>("")
  const [signs, setSigns] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value.trim())
  }

  const signImages = (input: string) => {
    let imgs = input.split("")
    setSigns(imgs)
  }

  /*   useEffect(() => {
    signImages(userInput)
  }, [userInput]) */

  const handleTranslateClick = async () => {
    setIsLoading(true)
    signImages(userInput)

    const translationHistory = [...user.translations]
    translationHistory.push(userInput)

    const [error, response] = await addTranslationToUser(user.id, translationHistory)
    if (error !== null) setErrorMessage(error)
    if (response !== null) {
      const [userError, userResponse] = await loginUser(user.username)
      if (userError !== null) setErrorMessage(userError)
      if (userResponse !== null) setUser(userResponse)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div>Translation page</div>
      <label htmlFor="translationText"></label>
      <input
        onChange={handleUserInputChange}
        placeholder=""
        type="text"
        id="translationText"
      />
      <button disabled={isLoading} onClick={handleTranslateClick}>Translate</button>
      <section>
        <TranslationSigns signs={signs} />
        {isLoading && <p>Loading ...</p>}
      </section>
    </>
  )
}

export default Translation
