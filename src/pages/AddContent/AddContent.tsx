import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { RateContent } from "../../components/RateContent/RateContent"
import { FiArrowLeft, FiTrash2 } from "react-icons/fi"
import { useNavigate  } from "react-router-dom";

export const AddContent = () => {
  const { user } = useContext(AuthContext)
  const { contentWatched } = useContext(AuthContext)
  let { state } = useLocation()
  let navigate = useNavigate ();
  console.log(state)
  console.log(contentWatched)
  const hasRate = user?.contentWatched.filter((item) => item.contentId == user.id)

  useEffect(() => {
    state.reviewContent = contentWatched?.filter((item) => item.id == state.id)
    console.log(state)
  }, [contentWatched])

  function handleBackPage () {
    navigate(-1)
  }
  return (
    <main className="max-w-4xl my-0 mx-auto w-full p-30 flex justify-center flex-col">

      <nav className="flex justify-between mb-12">
        <button onClick={handleBackPage}><FiArrowLeft size="2.2em" className='w-full hover:bg-transparent bg-greenDefault hover:stroke-greenDefault stroke-grayCard border-2 border-greenDefault rounded-md'/> </button>
        {hasRate && <h1 className="bg-greenDefault hover:bg-transparent border-2 border-greenDefault rounded-md p-1"><FiTrash2 size="1.7em" className='w-full hover:stroke-greenDefault stroke-grayCard'/></h1>}
      </nav>
      <div className="content flex">
        <img src={'https://image.tmdb.org/t/p/original/'+state.poster_path} className="max-w-xs h-full" alt="" />
        <div className="text pl-14">
          <h1 className="font-title text-3xl mb-3">{state.title}</h1>
          <p>{state.overview}</p>
          {hasRate && <RateContent contentResult={state} userToken={user?.token}/>}
        </div>
      </div>

    </main>
  )
}