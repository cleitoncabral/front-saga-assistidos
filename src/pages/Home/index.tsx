import { Header } from '../../components/Header'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useState, ChangeEvent, useContext } from "react"
import { dataBaseMovieApi } from '../../hooks/useDatabaseMovieApi'
import { Input } from '../../components/Input'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const Home = ({onSearchResult}: {onSearchResult: React.Dispatch<React.SetStateAction<object | null>>}) => {
  const userAuth = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [search, setSearch] = useState<string | null>(null)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const searchContent = async () => {
    const result = await getSearchData.getDataMovieApi(search)
    onSearchResult(result)
  }

  return (
    <div>
      <Header isAuth={userAuth.user}>
        <Input type="text" id="search" onChange={(search) => handleSearch(search)} placeholder="Pesquisar filme" />
        <Link to ="/searchContent"><button onClick={searchContent}><AiOutlineSearch /></button></Link>
      </Header>
      <h1>boas vindas, {userAuth.user?.name}</h1>
    </div>
  )
}