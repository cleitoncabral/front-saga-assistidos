import { MovieDBResults } from "../../types/MovieDB"
import { ShowFullOverviewText } from "../ShowFullOverviewText/ShowFullOverviewText"

export const Card = ({searchResultItem}: {searchResultItem: MovieDBResults}) => {
  
  return (
    <div className="container w-60 h-full bg-grayCard rounded-xl">
      <img src={'https://image.tmdb.org/t/p/original/'+searchResultItem.backdrop_path} alt="" />
      <div className="p-4">
        <h1 className="font-title mb-1">{searchResultItem.title}</h1>
        {searchResultItem.overview.length > 200 ? <ShowFullOverviewText content={searchResultItem.overview} /> : <p className="p-3">searchResultItem.overview</p>}
      </div>
    </div>
  )
}