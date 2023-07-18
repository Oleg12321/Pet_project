import React from "react"
import styles from "./FormsControls.moduls.css"

export const Textarea = ({ input, meta, ...props}) => {
    return (
    <div className={styles.formControl + " " + styles.error}>
      <textarea {...input} {...props} />
    </div>
  )
}