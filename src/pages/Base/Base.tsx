import { Link, Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Input } from "../../components/Input"
import { AiOutlineSearch } from "react-icons/ai"
import { dataBaseMovieApi } from "../../hooks/useDatabaseMovieApi"
import { MovieDB } from "../../types/MovieDB"

export const Base = () => {
  const userAuth = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [search, setSearch] = useState<string | null>(null)
  const [searchResult, setSearchResult] = useState<MovieDB>()
  const [valueInput, setValueInput] = useState<string>()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const searchContent = async () => {
    const result = await getSearchData.getDataMovieApiByName(search)
    console.log(result)
    setSearchResult(result)
    setValueInput(undefined)
  }
  return (
    <>
      <Header isAuth={userAuth.user}> 
        {userAuth.user && 
          <>
            <Input className='bg-gray border-greenDefault m-0-auto w-full' value={valueInput} onChange={handleSearch} type="text" id="search" placeholder="Pesquisar filme" />
            <Link className='bg-greenDefault h-9 -ml-2 mt-2 rounded-r-lg flex justify-center items-center w-8' to={`searchContent/result=${search}`}><button onClick={searchContent}><AiOutlineSearch /></button></Link>
          </>
        }
      </Header>

      <Outlet context={searchResult} />
    </>
  )
}