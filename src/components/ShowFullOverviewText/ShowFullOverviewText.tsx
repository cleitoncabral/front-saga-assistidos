import { useState } from "react"

export const ShowFullOverviewText = ({content}: {content: string}) => {
  const [show, setShow] = useState(false)
  
  return (
    <>
    {show ? content : <p className="font-bodyContent h-22 line-clamp-2">{content}</p>}
    <button className="text-greenDefault font-bodyContent block">
      <a className="font-bodyContent cursor-pointer" onClick={() => setShow(!show)}>Mostrar {show ? 'menos' : 'mais'}</a>
    </button>
    </>
  )
}