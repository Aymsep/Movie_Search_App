import React,{useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import './Search.scss'

const Search = ({setsearch,search,searchmovie}) => {
  const [focused, setfocused] = useState(false)
  const input = document.querySelector('input')
  if(focused) {
    input.focus()
  }
  console.log(focused)
  return (
    <div className='app__search'>
      <BsSearch 
      onClick={()=>{
        setfocused((prev)=>!prev)
        searchmovie(search)
      }}
      />
      <input
        value={search}
        onChange={(e)=> {
        setsearch(e.target.value)
        }}
        name='search'
        type="text"
        placeholder="Search For Movies And Series"
        onBlur={()=> setfocused(false)}
        />
      
    </div>
  )
}

export default Search