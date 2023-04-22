import './formulario.css'



function Formulario() {

    const enviofeito = (event) =>{
        event.preventDefault()
        console.log("aconteceu")
    }

return(
    <div>
        <form className='form' onSubmit={enviofeito}> 
            <h1>LOGIN</h1>
            <p>usuario</p>
            <input type="text" placeholder="Usuario" required/>
            <p>senha</p>
            <input type="password" placeholder="qual sua sennha?" required/>
            <button type="submit">Login</button>
        </form>
    </div>
)



}


export default Formulario