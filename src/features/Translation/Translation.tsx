import React, { useEffect, useState } from "react"
import { addTranslationToUser, loginUser } from "../../api/user"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../contextStore/UserContext"
import { storageSave } from "../../utils/storage"
import TranslationSigns from "./TranslationSigns"

const Translation = () => {
  const { user, setUser } = useUser()

  const [userInput, setUserInput] = useState<string>("")
  const [signs, setSigns] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value.trim().toLowerCase())
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

    const [error, response] = await addTranslationToUser(
      user.id,
      translationHistory
    )
    if (error !== null) setErrorMessage(error)
    if (response !== null) {
      storageSave(STORAGE_KEY_USER, response)
      setUser(response)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className="input-group flex-nowrap">
        <label htmlFor="translationText" aria-label="Translation input"></label>
        <span className="input-group-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-keyboard"
            viewBox="0 0 16 16"
          >
            <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z" />
            <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z" />
          </svg>
        </span>
        <input
          onChange={handleUserInputChange}
          placeholder="Write some text here..."
          type="text"
          id="translationText"
          aria-label="Translation text"
          className="form-control"
        />
        <button
          className="btn btn-info"
          type="button"
          id="button-addon"
          disabled={isLoading}
          onClick={handleTranslateClick}
        >
          Translate
        </button>
      </div>
      <section>
        <TranslationSigns signs={signs} />
        {isLoading && <p>Loading ...</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </section>
    </>
  )
}

export default Translation
