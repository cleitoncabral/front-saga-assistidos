import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { MovieDBResults } from "../../types/MovieDB";
import { Input } from "../Input";
import { FiEdit3 } from "react-icons/fi";

type PropsRequest = {
  contentResult: MovieDBResults,
  userToken: string | null | undefined
}

export const RateContent = (contentRequest: PropsRequest) => {
  const auth = useContext(AuthContext);
  
  const [rate, setRate] = useState<number | null>(null)
  const [comment, setComment] = useState<string | undefined>()

  useEffect(() => {
    contentRequest.contentResult.reviewContent?.rate && setRate(contentRequest.contentResult.reviewContent.rate)
    contentRequest.contentResult.reviewContent?.comment && setComment(contentRequest.contentResult.reviewContent.comment)
    console.log(contentRequest.contentResult)
  }, [contentRequest, auth])
  
  const handleNewRate = async () => {
    const response = await auth.createContent({contentId: contentRequest.contentResult.id, rate: 4, comment: comment}, contentRequest?.userToken)
    return response
  }


  const handleRateUpdate = async () => {
    console.log(contentRequest.contentResult.reviewContent)
    const response = await auth.updateContent({contentId: Number(contentRequest.contentResult.id), rate: 4, comment: comment, id: contentRequest.contentResult.reviewContent.id}, contentRequest.contentResult.reviewContent.id, contentRequest?.userToken)

    return response
  }

  return (
    <div className="pt-12">
      <Input label={contentRequest.contentResult.reviewContent?.comment ? "Edite sua review:" :"Escreva uma review..." } onChange={(e) => setComment(e.target.value)} type="text" value={comment && comment} id="comment" />
      <button className="bg-greenDefault bg-green-900:hover text-black font-bold px-10 py-2 rounded-lg mt-6" onClick={contentRequest.contentResult.reviewContent?.comment ? handleRateUpdate : handleNewRate}>{contentRequest.contentResult.reviewContent?.comment ? <span className="flex align-center">Editar <FiEdit3 className="mt-1 ml-2" /></span> : "Salvar" }</button>
    </div>
  )
}