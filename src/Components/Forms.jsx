import React, {useState} from 'react'

export const Forms = (props) => {
    const [data, setData] = useState({
        usuario: '',
        pass: '',
        nombre: ''
    })

    const capturarData = (event) => {
        // console.log('mostrata tipo');
        // console.log(typeof(event.target.name))

        setData({
            ...data,
            [event.target.name]: event.target.value
        })

        // if(event.target.name === 'usuario'){
        //             setData({
        //                 ...data,
        //                 usuario: event.target.value 
        //             })
        // }
        // if(event.target.name === 'pass'){
        //     setData({
        //         ...data,
        //         pass: event.target.value 
        //     })
        // }
        // console.log(data)
    }

    // const [usuario, setUsuario] = useState('')
    // const [pass, setPass] = useState('')

    // const capturarData = (event) =>{
    //     if(event.target.name === 'usuario'){
    //         setUsuario(event.target.value)
    //     }

    //     if(event.target.name === 'pass'){
    //         setPass(event.target.value)
    //     }

    //     //console.log(usuario)

    //     // console.log(event.target.name)
    //     // // console.log(event.target.value)
    // }

    // const logeando = () =>{
    //     props.logeando(data)
    // }
  
  return (
    <div>
        <form action="">
        <br/>

            <label htmlFor="usuario">Ingrese Usuario</label>
            <br/>
            <input type="text" 
                name='usuario'
                onChange={capturarData}
            />
            <br/>

            <label htmlFor="pass">Contraseña</label>
            <br/>

            <input  type="password" 
                name='pass'
                onChange={capturarData}
            />
             <label htmlFor="nombre">Nombre</label>
            <br/>

            <input  type="text" 
                name='nombre'
                onChange={capturarData}
            />
            <br/>

            <button type='button' onClick={()=> props.logeando(data)}>Login</button>
        </form>
    </div>
  )
}
