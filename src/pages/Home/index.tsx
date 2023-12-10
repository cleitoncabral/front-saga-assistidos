import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Card } from '../../components/Card/Card'
import { dataBaseMovieApi } from '../../hooks/useDatabaseMovieApi'
import { MovieDBResults } from '../../types/MovieDB'
import { FiTrash2 } from 'react-icons/fi'

export const Home = () => {
  const {contentWatched, user, deleteAllContentWatched} = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [contentSaved, setContentSaved] = useState<Array<MovieDBResults> | null>()

  // const [preventContentWatched, setPreventContentWatched] = useState(contentWatched)
  // console.log(preventContentWatched)
  // console.log(contentWatched)
  // if (contentWatched !== preventContentWatched) {
  //   var resultArray: Array<MovieDBResults> = []
  //   setPreventContentWatched(contentWatched)
  //   contentWatched?.map(async (item) => {
  //     if (item) {
  //       const result = await getSearchData.getDataMovieApiById(item.contentId)
  //       result.reviewContent = item
  //       resultArray = [...resultArray, result]
  //       return setContentSaved(resultArray)
  //     }
      
  //     return setContentSaved(null)
  //   })
  // }


  useEffect(() => {
    var resultArray: Array<MovieDBResults> = []
    const getDataFromApi = async () => {
      contentWatched?.map(async (item) => {
        if (item) {
          const result = await getSearchData.getDataMovieApiById(item.contentId)
          result.reviewContent = item
          resultArray = [...resultArray, result]
          setContentSaved(resultArray)
        } else {
          setContentSaved(null)
          return false
        }
      })
    }
    getDataFromApi()
  }, [contentWatched])
  
  const handleDelete = async () => {
    const response = await deleteAllContentWatched(user)
    response && setContentSaved(null)
  }

  return (
    <section className='container max-w-4xl center mx-auto justify-center'>
      <>
        <h1 className='center text-3xl text-start'>Boas vindas, {user?.name}</h1>
        {contentSaved && <button className='w-auto ml-auto mr-5 text-end block mt-10 mb-5' onClick={handleDelete}><FiTrash2 size="1.7em" className=' stroke-greenDefault'/></button>}
      </>
      <div className='container flex flex-row justify-center flex-wrap gap-10 mt-10'>
        {contentSaved == null ? <h1>Sem conteúdo salvo :(</h1> : (contentSaved ? contentSaved.map((item: MovieDBResults) => { return <Card key={item.id} searchResultItem={item} />}) : <h2>Carregando...</h2>)}
      </div>
    </section>
  )
}