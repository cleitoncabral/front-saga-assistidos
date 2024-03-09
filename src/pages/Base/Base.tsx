import { Link, Outlet, useLocation, useOutletContext, useSearchParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Input } from "../../components/Input/Input"
import { AiOutlineSearch } from "react-icons/ai"
import { dataBaseMovieApi } from "../../hooks/useDatabaseMovieApi"
import { MovieDB } from "../../types/MovieDB"
import Loading from "../../components/Loading/Loading"

export const Base = () => {
  const userAuth = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  let [searchResult, setSearchResult] = useState<MovieDB | null>()
  let [searchParams, setSearchParams] = useSearchParams()
  let [valueInput, setValueInput] = useState(searchParams.get('q') || '')
  let params = useLocation()
  
  const searchContent = async () => {
    setLoading(true)
    try {
      const result = await getSearchData.getDataMovieApiByName(valueInput)
      setSearchParams({q: valueInput})
      setSearchResult(result)
      setValueInput('')
    } catch (err: any) {
      setError(err.response.data.message)
      throw error
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    if (!params.search && !valueInput) {
      setValueInput('')
    }
  })

  return (
    <>
      <Header isAuth={userAuth.user}> 
        {userAuth.user && 
          <>
            <Input className='bg-gray border-greenDefault m-0-auto w-full' value={valueInput} onChange={(e) => setValueInput(e.target.value)} type="text" id="search" placeholder="Pesquisar filme" />
            <Link className='hover:bg-transparent hover:stroke-greenDefault stroke-grayCard border-greenDefault border-2 bg-greenDefault h-9 -ml-2 mt-2 rounded-r-lg flex justify-center items-center w-8' to={`searchContent?${searchParams}`} onClick={searchContent}><button><AiOutlineSearch /></button></Link>
          </>
        }
      </Header>
      
      {
        loading == false ? (
          <Outlet context={searchResult}/>
        ) : <Loading />
      }
    </>
  )
}

export const useSearchResult = () => {
  return useOutletContext<MovieDB | null>()
}