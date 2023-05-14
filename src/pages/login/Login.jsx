import './Login.css'
import '../../components/login-interface'
import Header from '../../components/Header'
import Logoninterface from '../../components/login-interface'

function Login(){

    return(
        <>
        <div className='login-background'>
        <Header />
            <div className='login-main-div'>
            <Logoninterface/>
            </div>
        </div>
        </>
    )
}
export default Login