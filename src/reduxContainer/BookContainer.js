import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/hooks/useSelector'
import purchase_book from './BookAction'

const BookContainer = () => {
    const noOfBooks=useSelector(state=>state.NumberOfBooks)
    const dispatch=useDispatch()
  return (
    <>
      <div>Books Containerr</div>
      <h2>Number of Books - {noOfBooks}</h2>
      <button onClick={()=>dispatch(purchase_book())}>buyBook</button>
    </>
    
  )
}

export default BookContainer
