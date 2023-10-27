import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Card } from '../../components/Card/Card'

export const Home = () => {
  const userAuth = useContext(AuthContext)
  const [contentWatchedData, setContentWatchedData] = useState()
  // console.log()
  return (
    <section>
      <h1>boas vindas, {userAuth.user?.name}</h1>

      {/* {userAuth.user?.contentWatched.map((item) => { return <Card key={item.contentId} searchResultItem={item} />})} */}
    </section>
  )
}