import React from 'react'

const review = ({params}) => {
  return (
    <div>
        <p>this is number {params.productid} product </p>

        <p>Reviews</p>
        <p>1 good product</p>
        <p>2 Excellent  product</p>
        <p>3 Bad product</p>
        <p>4 Average product</p>
    </div>
  )
}

export default review