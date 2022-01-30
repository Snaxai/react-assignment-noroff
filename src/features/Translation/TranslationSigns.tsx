import React, { useEffect, useState } from "react"
import TranslationSignImg from "./TranslationSignImg"

const TranslationSigns = ({ signs }) => {
  return (
    <>
      <h4>Output</h4>
      {signs &&
        signs.map((sign, index) => (
          <TranslationSignImg sign={sign} key={`${index}-${sign}`} />
        ))}
    </>
  )
}

export default TranslationSigns
