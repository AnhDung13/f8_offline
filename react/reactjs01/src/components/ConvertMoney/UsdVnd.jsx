import React from 'react'

export default function UsdVnd({usd,onChange}) {
  return (
    <div><input type="number" onChange={onChange} value={usd} name="" placeholder='USD' /></div>
  )
}
