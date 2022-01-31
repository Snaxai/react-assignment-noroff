import React from "react"
import Translation from "../features/Translation/Translation"
import withAuth from "../hoc/withAuth"

const TranslationView = () => {
  return (
    <>
      <Translation />
    </>
  )
}

export default withAuth(TranslationView)
