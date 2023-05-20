import './Logon-interface.css'
import '../index.css'

function Logoninterface() {
    return(
        <div className='logon-form'>
            <form className='form-logon' method='POST'>
            <h1>Registre-se</h1>
                <input className='logon-input' placeholder='Nome' type="text" name="name" id="name" />
                <input className='logon-input' placeholder='Email' type="email" name="email" id="email" />
                <input className='logon-input' placeholder='Senha' type="password" name="password" id="password" />
                <input className='logon-input' placeholder='Repita a senha' type="password" name="password2" id="password2" />
                <button className='button' type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Logoninterface