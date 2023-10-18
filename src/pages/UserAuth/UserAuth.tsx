
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
  const [searchResult, setSearchResult] = useState<MovieDB | null>(null)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const searchContent = async () => {
    const result = await getSearchData.getDataMovieApi(search)
    setSearchResult(result)
    console.log(result)
    console.log(searchResult)
  }

  return (
    <div>
      <Header isAuth={userAuth.user}>
        <Input className='bg-gray border-0' type="text" id="search" onChange={(search) => handleSearch(search)} placeholder="Pesquisar filme" />
        <Link to ="searchContent"><button onClick={searchContent}><AiOutlineSearch /></button></Link>
      </Header>
      {searchResult ? <Outlet context={searchResult}/> : <h1>Conteúdo não encontrado</h1>}
    </div>
  )
}

export const useSearchResult = () => {
  return useOutletContext<MovieDB | null>()
}