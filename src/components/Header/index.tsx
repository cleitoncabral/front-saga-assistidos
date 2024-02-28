
import {clsx} from 'clsx'
import { User } from '../../types/User'
import { ReactNode, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PiSignOutBold } from "react-icons/pi";
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Header = ({isAuth, children} : {isAuth?: User | null, children?: ReactNode}) => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.logout()
  }
  
  return (
    <header className={clsx(isAuth ? "justify-start" : "justify-center", "flex w-full max-w-7xl mx-auto bg-black py-5 pr-2")}> 
      <Link to='/home'><img className="center" src="/logo.svg" /> </Link>
      {isAuth && <div className='flex justify-center items-center w-full'>{children}</div>}
      {isAuth && <button onClick={handleLogout}><PiSignOutBold /></button>}
    </header>
  )
}