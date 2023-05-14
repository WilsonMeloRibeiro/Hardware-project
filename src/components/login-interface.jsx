import './Login-interface.css'
import '../index.css'

function Logoninterface() {
    return(
        <div className='logon-form'>
            <form className='form' method='POST'>
            <h1>Entrar</h1>
                <input placeholder='Email' type="email" name="email" id="email" />
                <input placeholder='Senha' type="password" name="password" id="password" />
                <button className='button' type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Logoninterface