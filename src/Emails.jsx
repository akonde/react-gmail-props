import React from 'react'
import Email from './Email'
import './styles/emails.css'
function Emails({ emails, toggleRead, toggleStar }) {
  return (
    <ul>
      {emails.map(email => (
        <Email
          key={email.id}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  )
}

export default Emails
