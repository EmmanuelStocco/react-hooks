// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState('initialName') //criando variavel name de estado

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
    //name = event.target.value
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value="fulano"/> 
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName = "Sicrano"/>
}

export default App

//<!--HandreChange é uma função q detecta alteração e faz a atualização na var de estado >
