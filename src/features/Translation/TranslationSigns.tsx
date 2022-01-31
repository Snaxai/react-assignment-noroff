import React, { useEffect, useState } from "react"
import TranslationSignImg from "./TranslationSignImg"

const TranslationSigns = ({ signs }) => {
  return (
    <>
      <div className="container shadow mt-3 rounded">
        {signs &&
          signs.map((sign, index) => (
            <TranslationSignImg sign={sign} key={`${index}-${sign}`} />
          ))}
      </div>
    </>
  )
}

export default TranslationSigns
