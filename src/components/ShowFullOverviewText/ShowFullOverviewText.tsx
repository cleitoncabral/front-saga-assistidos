import { useState } from "react"

export const ShowFullOverviewText = ({content}: {content: string}) => {
  const [show, setShow] = useState(false)
  
  return (
    <>
    {show ? <p className="font-bodyContent">{content}</p> : <p className="font-bodyContent h-22 line-clamp-2">{content}</p>}
    <button className="text-greenDefault hover:text-green-900 font-bodyContent block">
      <a className="font-bodyContent cursor-pointer" onClick={() => setShow(!show)}>Mostrar {show ? 'menos' : 'mais'}</a>
    </button>
    </>
  )
}