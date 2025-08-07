import React from 'react'

export default function layout({children} : Readonly<{children: React.ReactNode}>) {
  return (
    <div>
        This is layout!
        {children}
    </div>
  )
}
