import iconLogin from '../../assets/icon-login.svg';
import iconRegister from '../../assets/icon-register.svg';

const Logout = () => {
    return (
        <>
            <li>
                <a href='#' className='button gray'>
                    <img src={iconLogin} alt="" />
                    <span>Login</span>
                </a>
            </li>
            <li className='onlu-pc'>
                <a href='#' className='button gray'>
                    <img src={iconRegister} />
                    <span>Register</span>
                </a>
            </li>
        </>
    )
}

export default Logout;