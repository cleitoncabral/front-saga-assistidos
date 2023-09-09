import {clsx} from 'clsx'
import { SearchBar } from '../SearchBar'
export const Header = ({isAuth} : {isAuth: boolean}) => {
  return (
    <header className={clsx(isAuth ? "justify-start" : "justify-center", "flex w-full bg-black py-5")}> 
      <img className="center" src="/logo.svg" />

      {isAuth &&

      <SearchBar />

      }
    </header>
  )
}