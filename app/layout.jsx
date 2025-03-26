import React from 'react'

import '../public/globals.css'
import '../public/salute.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
