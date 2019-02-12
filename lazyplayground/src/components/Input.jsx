import React from 'react'

const Input = () => {
  return (
  <React.Fragment>
      <label htmlFor="todo" className="label">
      To do Item
      <div className="control">
      <input id="todo" type="text" className="input is-rounded"/>
      </div>
      </label>
  </React.Fragment>
  )
}

export default Input
