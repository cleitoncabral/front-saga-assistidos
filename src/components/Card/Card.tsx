import { Link, useParams } from "react-router-dom"
import { MovieDBResults } from "../../types/MovieDB"
import { ShowFullOverviewText } from "../ShowFullOverviewText/ShowFullOverviewText"
import { BsFillPlayFill } from "react-icons/bs"

export const Card = ({searchResultItem}: {searchResultItem: MovieDBResults}) => {
  let { movieId } = useParams()

  return (
    <div className="container w-64 h-full bg-grayCard rounded-xl">

      <img src={'https://image.tmdb.org/t/p/original/'+searchResultItem.backdrop_path} alt="" />

      <div className="relative p-4">

        <h1 className="font-title mb-1 mr-9">{searchResultItem.title}</h1>
        <Link to={`review=${searchResultItem.title}`} state={searchResultItem}><button className="absolute right-3 top-5 bg-greenDefault hover:bg-green-900 w-7 h-7 rounded-lg pl-1.5 pr-1.5"><span>{searchResultItem.reviewContent ? <BsFillPlayFill /> : '+ '}</span></button></Link>
        {searchResultItem.overview ? <ShowFullOverviewText content={searchResultItem.overview} /> : <p className="p-3">{searchResultItem.overview}</p>}
      
      </div>
    </div>
  )
}