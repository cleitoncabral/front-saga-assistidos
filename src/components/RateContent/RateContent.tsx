import {useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { MovieDBResults } from "../../types/MovieDB";
import { Input } from "../Input/Input";
import { FiEdit3 } from "react-icons/fi";
import { FeedbackHandler } from "../FeedbackHandler/FeedbackHandler";
import { Feedback } from "../../types/Feedback";
import { StarsRating } from "../StarsRating/StarsRating";
import { AxiosError } from "axios";
import clsx from "clsx";
import { ContentWatched } from "../../types/ContentWatched";

type PropsRequest = {
  contentResult: MovieDBResults,
  userToken: string | undefined
}

export const RateContent = (contentRequest: PropsRequest) => {
  const auth = useContext(AuthContext);
  
  const [rate, setRate] = useState<number>(0)
  const [comment, setComment] = useState<string | undefined>()

  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const [contentReviewed, setContentReviewed] = useState<ContentWatched>()
  useEffect(() => {
    const content = auth.contentWatched?.filter((item) => item.contentId == Number(contentRequest.contentResult.id))[0]
    setContentReviewed(content)
    content?.rate && setRate(content.rate)
    content?.comment && setComment(content.comment)
  }, [auth])

  function handleRating (rate: number) {
    setRate(rate)
  }
  
  const handleCreateContent = async () => {
    setLoading(true)
    try {
      const response = await auth.createContent({contentId: contentRequest.contentResult.id, rate: rate, comment: comment}, contentRequest.userToken)
      const feedbackContent = {
        feedbackType: response,
        feedbackContent: 'criada'
      }
      setFeedback(feedbackContent)
      
    } catch (error) {
      if (error instanceof AxiosError) {
        const feedbackContent = {
          feedbackType: false,
          feedbackContent: error.response?.data.error
        }
        setFeedback(feedbackContent)
      } else {
        throw error
      }
    } finally {
      setLoading(false)
    }
  }

  const handleRateUpdate = async () => {
    setLoading(true)

    try {
      const response = await auth.updateContent({contentId: Number(contentRequest.contentResult.id), rate: rate, comment: comment, id: contentReviewed?.id}, contentRequest?.userToken)
      
      const feedbackContent = {
        feedbackType: response,
        feedbackContent: 'editada'
      }

      setFeedback(feedbackContent)
    } catch (error) {
      if (error instanceof AxiosError) {
        const feedbackContent = {
          feedbackType: false,
          feedbackContent: error.response?.data.error
        }
        setFeedback(feedbackContent)
      } else {
        throw error
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className={clsx(loading && "pointer-events-none", "pt-12")}>
        <StarsRating handleRating={handleRating} rate={rate} />
        <Input label={contentReviewed?.comment ? "Edite sua review:" :"Escreva uma review..." } onChange={(e) => setComment(e.target.value)} type="text" value={comment && comment} id="comment" />
        <button className={clsx(loading && "opacity-10", "bg-greenDefault bg-green-900:hover text-black font-bold px-10 py-2 rounded-lg mt-6")} onClick={(contentReviewed?.comment || contentReviewed?.rate) ? handleRateUpdate : handleCreateContent}>{(contentReviewed?.comment || contentReviewed?.rate) ? <span className="flex align-center">Editar <FiEdit3 className="mt-1 ml-2" /></span> : "Salvar" }</button>
        <FeedbackHandler feedbackData={feedback} />
      </div>
    </>
  )
}