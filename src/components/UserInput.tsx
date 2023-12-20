import React from 'react'

export default function UserInput({
    setUserInput}) {
        function handleSearch(event) {
            event.preventDefault()
            setUserInput(event.target.value)
        }


  return (
    <div>
        <input type="text" placeholder="Search" onChange={handleSearch} />
    </div>
  )
}
