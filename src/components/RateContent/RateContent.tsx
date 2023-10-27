import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";

type PropsRequest = {
  contentId: number,
  userToken: string | null | undefined
}

export const RateContent = (contentRequest: PropsRequest) => {
  const auth = useContext(AuthContext);
  console.log(contentRequest)
  const [rate, setRate] = useState()

  const handleRate = async () => {
    const response = await auth.createContent({contentId: contentRequest.contentId, rate: 4, comment: 'teste'}, contentRequest?.userToken)
    // console.log(response)
  }

  return (
    <div>
      <button onClick={handleRate}>Rate</button>
    </div>
  )
}