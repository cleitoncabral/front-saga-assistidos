import clsx from "clsx";
import { Feedback } from "../../types/Feedback";

export const FeedbackHandler = ({feedbackData}: {feedbackData: Feedback | null}) => {
  console.log(feedbackData)
  return (
    <div>
      {feedbackData === null ? <p></p> : feedbackData?.feedbackType === true ? <p className="bg-greenDefault p-10 mt-10 rounded-md font-bold font-12">A review foi {feedbackData.feedbackContent} com sucesso!</p> : <p className="bg-red-600 p-10 mt-10 rounded-md font-bold font-12">Erro ao salvar</p>}
    </div>
  )
}