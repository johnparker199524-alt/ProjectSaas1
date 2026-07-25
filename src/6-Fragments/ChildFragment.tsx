import React from 'react'
import { IIntroduction } from '../1-Introduction/model/IIntroduction'

const ChildFragment:React.FC<IIntroduction> = (props) => {
  return (
    <div>Films
      <li>Title is { props.title }</li>    
      <li>Description is { props.description }</li>    
          <li>Release is {props.release}</li>    
          </div>
  )
}

export default ChildFragment