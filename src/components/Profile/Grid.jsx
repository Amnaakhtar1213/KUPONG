import React from 'react'
import AccountInfo from './AccountInfo'
import OrderSummary from './OrderSummary'

const Grid = ({ currentUser, order }) => {


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-20 px-4 md:px-8 lg:px-40">
        <AccountInfo currentUser={currentUser} />
        <OrderSummary order={order}/>
      </div>
    </div>
  )
}
export default Grid
