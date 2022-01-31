import React from "react"
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
  const translationList = translations.map((translation, index) => (
    <ProfileTranslationHistoryItem
      translation={translation}
      key={index + "-" + translation}
      index={index}
    />
  ))

  return (
    <section>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Translation</th>
          </tr>
        </thead>
        <tbody>
          {translations.length <= 0 ? (
            <tr>
              <th></th>
              <td>There are no translation history</td>
            </tr>
          ) : (
            translationList
          )}
        </tbody>
      </table>
    </section>
  )
}

export default ProfileTranslationHistory
