import React,{useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import './Search.scss'

const Search = () => {
  const [focused, setfocused] = useState(false)
  const input = document.querySelector('input')
  if(focused) {
    input.focus()
  }
  console.log(focused)
  return (
    <div className='app__search'>
      <BsSearch 
      onClick={()=> setfocused((prev)=>!prev)}
      />
      <input
        name='search'
        type="text"
        placeholder="Search For Movies And Series"
        onBlur={()=> setfocused(false)}
        />
      
    </div>
  )
}

export default Search