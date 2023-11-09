
import {Outlet, useOutletContext} from 'react-router-dom'
import { Header } from '../../components/Header'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useState, ChangeEvent, useContext } from "react"
import { MovieDB } from '../../types/MovieDB'
import { dataBaseMovieApi } from '../../hooks/useDatabaseMovieApi'
import { Input } from '../../components/Input'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'


export default function UserAuth () {
  const userAuth = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [search, setSearch] = useState<string | null>(null)
  const [searchResult, setSearchResult] = useState<MovieDB>()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const searchContent = async () => {
    const result = await getSearchData.getDataMovieApiByName(search)
    console.log(result)
    setSearchResult(result)
  }

  return (
    <>
      <Header isAuth={userAuth.user}>
        <Input className='bg-gray border-greenDefault m-0-auto w-full' type="text" id="search" onChange={(search) => handleSearch(search)} placeholder="Pesquisar filme" />
        <Link className='bg-greenDefault h-9 -ml-2 mt-2 rounded-r-lg flex justify-center items-center w-8' to ="searchContent"><button onClick={searchContent}><AiOutlineSearch /></button></Link>
      </Header>
      <Outlet context={searchResult} />
    </>
  )
}

export const useSearchResult = () => {
  return useOutletContext<MovieDB | null>()
}