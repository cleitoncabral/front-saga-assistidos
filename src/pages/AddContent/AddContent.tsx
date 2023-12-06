import { useLocation } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { RateContent } from "../../components/RateContent/RateContent"
import { FiArrowLeft, FiTrash2 } from "react-icons/fi"
import { useNavigate  } from "react-router-dom";

export const AddContent = () => {
  const { user, deleteContent } = useContext(AuthContext)
  let { state } = useLocation()
  let navigate = useNavigate ();
  
  const hasRate = user?.contentWatched.filter((item) => item.contentId == user.id)

  function handleBackPage () {
    navigate(-1)
  }
  
  function handleDeleteItem () {
    deleteContent(state.reviewContent[0].id, user?.token)
    navigate(-1)
  }
  return (
    <main className="max-w-4xl my-0 mx-auto w-full p-30 flex justify-center flex-col">

      <nav className="flex justify-between mb-12">
        <button onClick={handleBackPage}><FiArrowLeft size="2.2em" className='w-full hover:bg-transparent bg-greenDefault hover:stroke-greenDefault stroke-grayCard border-2 border-greenDefault rounded-md'/> </button>
        {hasRate && <button onClick={handleDeleteItem} className="bg-greenDefault hover:bg-transparent border-2 border-greenDefault rounded-md p-1"><FiTrash2 size="1.7em" className='w-full hover:stroke-greenDefault stroke-grayCard'/></button>}
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