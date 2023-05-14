import Header from '../../components/Header'
import './Logon.css'
import '../../index.css'
import Logoninterface from '../../components/Logon-interface'
function Logon () {

    return(
        <>
        <div className='logon-background'>
        <Header />
            <div className='div'>
                <Logoninterface/>
            </div>
        </div>
        </>
    )
}

export default Logon