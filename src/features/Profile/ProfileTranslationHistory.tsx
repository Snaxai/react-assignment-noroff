import React from "react"
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
  const translationList = translations.map((translation, index) => (
    <ProfileTranslationHistoryItem
      translation={translation}
      key={index + "-" + translation}
    />
  ))

  return (
    <section>
      <h4>Your translation history</h4>
      <ul>{translationList}</ul>
    </section>
  )
}

export default ProfileTranslationHistory
