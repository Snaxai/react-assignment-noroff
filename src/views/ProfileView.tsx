import React from "react"
import { useUser } from "../contextStore/UserContext"
import ProfileActions from "../features/Profile/ProfileActions"
import ProfileHeader from "../features/Profile/ProfileHeader"
import ProfileTranslations from "../features/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"

const ProfileView = () => {
  const { user } = useUser()

  return (
    <>
      <ProfileHeader username={user.username} />
      <ProfileActions />
      <ProfileTranslations translations={user.translations} />
    </>
  )
}

export default withAuth(ProfileView)
