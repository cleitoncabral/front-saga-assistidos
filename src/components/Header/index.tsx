
import {clsx} from 'clsx'
import { User } from '../../types/User'
import { ReactNode } from 'react'

export const Header = ({isAuth, children} : {isAuth?: User | null, children?: ReactNode}) => {
  return (
    <header className={clsx(isAuth ? "justify-start" : "justify-center", "flex w-full bg-black py-5")}> 
      <img className="center" src="/logo.svg" />
      {isAuth && <div className='flex justify-center items-center w-full'>{children}</div>}
    </header>
  )
}