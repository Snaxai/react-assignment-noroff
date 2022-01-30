import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { loginUser } from "../../api/user"
import { storageSave } from "../../utils/storage"
import { useUser } from "../../contextStore/UserContext"
import { useNavigate } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

const usernameConfig = {
  required: true,
  minLength: 3,
}

const LoginForm = () => {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  // Local state
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<null | string>(null)

  // Side Effects
  useEffect(() => {
    if (user !== null) navigate("translation")
  }, [user, navigate])

  // Event Handlers
  const onSubmit = async (data: any) => {
    setIsLoading(true)
    const [error, userResponse] = await loginUser(data.username)
    if (error !== null) setApiError(error)
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse)
      setUser(userResponse)
    }

    setIsLoading(false)
  }

  // Render Functions
  const errorMessage = (() => {
    if (!errors.username) return null
    if (errors.username.type === "required")
      return <span>Username is required</span>
    if (errors.username.type === "minLength")
      return <span>Username is too short (min. 3)</span>
  })()

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="johndoe"
            {...register("username", usernameConfig)}
          />
          <br />
          {errorMessage}
        </fieldset>
        <button disabled={isLoading}>Continue</button>
        {isLoading && <p>Logging in ...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  )
}

export default LoginForm
