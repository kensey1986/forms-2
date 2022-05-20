import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Forms } from './Components/Forms'

function App() {
  const [loginUser, setLoginUser] = useState(false)

  const logeando = (data) =>{
    console.log('logeando.....');
    console.log(data);
    if (data.usuario === 'pepito15' && data.pass === 'pepito2022') {
        alert('ingreso exitoso')
        setLoginUser(true)
    } else {
        alert('ingreso fallido')
    }
}
  return (
  <div className="App"> 

        {
          loginUser ? <h1>Bienvenido usuario</h1> 
          : 
          (
            <Forms
              logeando={logeando}
              />
          )
        }

        
  </div>
  )
  
}

export default App
