import React from 'react'

const reviewid = ({params}) => {
    console.log(params);
  return (
    <div>
       This is number {params.productid} product at review number {params.reviewid}

       <p>Review content :
        {
            params.reviewid==1?
            <span> Good product</span>
            :params.reviewid==2?
            <span> Excellent  product</span>
            :params.reviewid==3?
            <span> Bad product</span>
            :
            <span> Average product</span>
        }
       </p>
    </div>
  )
}

export default reviewid