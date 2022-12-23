import React from 'react'

function Button({ changeTheme }) {
  return (
    <div className="button">
      <button onClick={changeTheme} className="btn">
        Switch Theme
      </button>
    </div>
  )
}

export default Button