import './StarsRtatin.module.css'
import { Rating } from 'react-simple-star-rating'
import { MouseEvent } from "react";

interface handleRateClick {
  (value: number, 
  index: number, 
  event?: MouseEvent<HTMLSpanElement, globalThis.MouseEvent> | undefined): void | undefined
}

export const StarsRating = ({handleRating, rate} : {handleRating: handleRateClick, rate: number}) => {

  return (
    <div className="stars" >
      <Rating SVGclassName={'inline-block'} transition allowFraction  onClick={handleRating} initialValue={rate} />
    </div>
  )
}