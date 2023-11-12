import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Card } from '../../components/Card/Card'
import { dataBaseMovieApi } from '../../hooks/useDatabaseMovieApi'
import { MovieDBResults } from '../../types/MovieDB'
import { FiTrash2 } from 'react-icons/fi'

export const Home = () => {
  const userAuth = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [contentSaved, setContentSaved] = useState<Array<MovieDBResults>>()

  useEffect(() => {
    var resultArray: Array<MovieDBResults> = []
    const getDataFromApi = async () => {
      userAuth.contentWatched?.map(async (item) => {
        const result = await getSearchData.getDataMovieApiById(item.contentId)
        result.reviewContent = item
        resultArray = [...resultArray, result]
        setContentSaved(resultArray)
      })
    }
    getDataFromApi()
  }, [userAuth])
  
  const handleDelete = async () => {
    await userAuth.deleteAllContentWatched(userAuth.user?.token)
  }

  return (
    <section className='container max-w-4xl center mx-auto justify-center'>
      <>
        <h1 className='center text-3xl text-start'>Boas vindas, {userAuth.user?.name}</h1>
        <button className='w-auto ml-auto mr-5 text-end block mt-10 mb-5' onClick={handleDelete}><FiTrash2 size="1.7em" className=' stroke-greenDefault'/></button>
      </>
      <div className='container flex flex-row justify-center flex-wrap gap-10'>
        {contentSaved ? contentSaved.map((item: MovieDBResults) => { return <Card key={item.id} searchResultItem={item} />}) : <h2>Carregando...</h2>}
      </div>
    </section>
  )
}