import { useLocation } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { RateContent } from "../../components/RateContent/RateContent"

export const AddContent = () => {
  const { user } = useContext(AuthContext)
  const { state } = useLocation()

  console.log(user?.token)

  const hasRate = user?.contentWatched.filter((item) => item.contentId == user.id)

  return (
    <main className="max-w-4xl my-0 mx-auto w-full p-30 flex justify-center">
      <img src={'https://image.tmdb.org/t/p/original/'+state.poster_path} className="w-80" alt="" />

      <div className="content pl-14">
        <h1 className="font-title text-3xl mb-3">{state.title}</h1>
        <p>{state.overview}</p>
      </div>

      {hasRate && <RateContent contentId={state.id} userToken={user?.token}/>}
    </main>
  )
}