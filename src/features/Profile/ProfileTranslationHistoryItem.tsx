import React from "react"

const ProfileTranslationHistoryItem = ({ translation, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{translation}</td>
    </tr>
  )
}

export default ProfileTranslationHistoryItem
