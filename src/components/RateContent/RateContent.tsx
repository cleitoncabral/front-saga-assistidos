import {useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { MovieDBResults } from "../../types/MovieDB";
import { Input } from "../Input";
import { FiEdit3 } from "react-icons/fi";
import { FeedbackHandler } from "../FeedbackHandler/FeedbackHandler";
import { Feedback } from "../../types/Feedback";

type PropsRequest = {
  contentResult: MovieDBResults,
  userToken: string | null | undefined
}

export const RateContent = (contentRequest: PropsRequest) => {
  const auth = useContext(AuthContext);
  
  const [rate, setRate] = useState<number | null>(null)
  const [comment, setComment] = useState<string | undefined>()

  const [feedback, setFeedback] = useState<Feedback | null>(null)

  useEffect(() => {
    const contentReviewd = auth.contentWatched?.filter((item) => item.contentId == Number(contentRequest.contentResult.id))[0]

    contentReviewd?.rate && setRate(contentReviewd.rate)
    contentReviewd?.comment && setComment(contentReviewd.comment)
  }, [auth])
  
  const handleNewRate = async () => {
    const response = await auth.createContent({contentId: contentRequest.contentResult.id, rate: 4, comment: comment}, contentRequest?.userToken)
    const feedbackContent = {
      feedbackType: response,
      feedbackContent: 'criada'
    }

    setFeedback(feedbackContent)
    return response
  }

  const handleRateUpdate = async () => {
    const response = await auth.updateContent({contentId: Number(contentRequest.contentResult.id), rate: 4, comment: comment, id: contentRequest.contentResult.reviewContent.id}, contentRequest.contentResult.reviewContent.id, contentRequest?.userToken)
    
    const feedbackContent = {
      feedbackType: response,
      feedbackContent: 'editada'
    }

    setFeedback(feedbackContent)
    return response
  }

  return (
    <div className="pt-12">
      <Input label={contentRequest.contentResult.reviewContent?.comment ? "Edite sua review:" :"Escreva uma review..." } onChange={(e) => setComment(e.target.value)} type="text" value={comment && comment} id="comment" />
      <button className="bg-greenDefault bg-green-900:hover text-black font-bold px-10 py-2 rounded-lg mt-6" onClick={contentRequest.contentResult.reviewContent?.comment ? handleRateUpdate : handleNewRate}>{contentRequest.contentResult.reviewContent?.comment ? <span className="flex align-center">Editar <FiEdit3 className="mt-1 ml-2" /></span> : "Salvar" }</button>
      <FeedbackHandler feedbackData={feedback} />
    </div>
  )
}