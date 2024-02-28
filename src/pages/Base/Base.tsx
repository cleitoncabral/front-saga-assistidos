import { Link, Outlet, useLocation, useOutletContext, useParams, useSearchParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Input } from "../../components/Input/Input"
import { AiOutlineSearch } from "react-icons/ai"
import { dataBaseMovieApi } from "../../hooks/useDatabaseMovieApi"
import { MovieDB } from "../../types/MovieDB"

export const Base = () => {
  const userAuth = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [searchResult, setSearchResult] = useState<MovieDB>()
  let [searchParams, setSearchParams] = useSearchParams()
  const [valueInput, setValueInput] = useState(searchParams.get('q') || '')
  let params = useLocation()

  const searchContent = async () => {
    const result = await getSearchData.getDataMovieApiByName(valueInput)
    setSearchParams({q: valueInput})
    setSearchResult(result)
  }

  useEffect(() => {
    if (!params.search && !params.state) {
      setValueInput('')
    } 
  }, [params])

  return (
    <>
      <Header isAuth={userAuth.user}> 
        {userAuth.user && 
          <>
            <Input className='bg-gray border-greenDefault m-0-auto w-full' value={valueInput} onChange={(e) => setValueInput(e.target.value)} type="text" id="search" placeholder="Pesquisar filme" />
            <Link className='bg-greenDefault h-9 -ml-2 mt-2 rounded-r-lg flex justify-center items-center w-8' to={`searchContent/?${searchParams}`}><button onClick={searchContent}><AiOutlineSearch /></button></Link>
          </>
        }
      </Header>

      <Outlet context={searchResult} />
    </>
  )
}

export const useSearchResult = () => {
  return useOutletContext<MovieDB | null>()
}