import { useState } from 'react'

import BoardTop from '../containers/BoardTop'
import BoardBottom from '../containers/BoardBottom'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user, isFocus, logoutUser}) => {
  const [appHeight, setAppHeight] = useState(200)
  const resizeCheck = () => {
    const wrap_dom =  document.getElementById('app')
    setAppHeight(wrap_dom.clientHeight)
  }
  window.addEventListener('resize', resizeCheck)
  window.addEventListener('load', resizeCheck)

  return (
    <>
      <BoardTop appHeight={appHeight} />
      <BoardBottom appHeight={appHeight} />
    </>
  )
}