import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Flights = () => {
  const[searchParam]=useSearchParams()
  const from=searchParam.get('f')
  const to=searchParam.get('t')
  const way=searchParam.get('tway')
  const [eld,chi,inf]=searchParam.get('p').split('-')
  const type=searchParam.get('ty')
  const dept=searchParam.get('dd')
  const arr=searchParam.get('ad')
  return (
    <div>
      From= {from}
      To={to}
      Elder={eld}
      Children={chi}
      Infants={inf}
      Type={type}
      Departure On={dept}
      {(way==='true')&&<>Arrival On={arr}</>}
    </div>
  )
}
export default Flights