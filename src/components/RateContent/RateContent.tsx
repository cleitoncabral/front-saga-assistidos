import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { MovieDBResults } from "../../types/MovieDB";
import { ContentWatched } from "../../types/ContentWatched";
import { Input } from "../Input";

type PropsRequest = {
  contentResult: MovieDBResults,
  userToken: string | null | undefined
}

export const RateContent = (contentRequest: PropsRequest) => {
  const auth = useContext(AuthContext);
  
  const [rate, setRate] = useState<number | null>(null)
  const [comment, setComment] = useState<string>()

  useEffect(() => {
    contentRequest.contentResult.reviewContent?.rate && setRate(contentRequest.contentResult.reviewContent.rate)
    contentRequest.contentResult.reviewContent?.comment && setComment(contentRequest.contentResult.reviewContent.comment)
  }, [])

  const handleNewRate = async () => {
    const response = await auth.createContent({contentId: contentRequest.contentResult.id, rate: 4, comment: comment}, contentRequest?.userToken)
    return response
  }

  return (
    <div className="pt-12">
      <Input label={comment ? "Edite sua review:" :"Escreva uma review..." } onChange={(e) => setComment(e.target.value)} type="text" value={comment && comment} id="comment" />
      <button className="bg-greenDefault bg-green-900:hover text-black font-bold px-10 py-2 rounded-lg" onClick={handleNewRate}>Salvar</button>
    </div>
  )
}