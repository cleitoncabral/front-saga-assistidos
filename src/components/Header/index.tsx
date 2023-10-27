
import {clsx} from 'clsx'
import { User } from '../../types/User'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const Header = ({isAuth, children} : {isAuth?: User | null, children?: ReactNode}) => {
  return (
    <header className={clsx(isAuth ? "justify-start" : "justify-center", "flex w-full bg-black py-5")}> 
      <Link to='/home'><img className="center" src="/logo.svg" /> </Link>
      {isAuth && <div className='flex justify-center items-center w-full'>{children}</div>}
    </header>
  )
}