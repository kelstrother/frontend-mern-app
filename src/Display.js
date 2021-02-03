import React from 'react'

const Display = (props) => {
   const {guitars} = props
   const {players} = props
   
   return (
      <div className='display-container'>
         
         {players.map(player => {
            return (
               <article className="players-card">
                  <h1 className="players">Players</h1>
                  <h2 className="player-name">Name:   { player.name }</h2>
                  <h3 className="player-style">Style:   { player.style }</h3>
                  <h4 className="player-age">Age:  { player.age }</h4>   
                  <img 
                  src={player.img} 
                  alt="guitar player" 
                  className="player-img"
                  style= {{ height: "200px", width: "20vw"}}
                  />           
                  <button className="delete">Delete</button>
                  <button className="edit">Edit</button>
               </article>  
            )
         })}
               {guitars.map(guitar => {
                  return (
                     <article className="guitars-container">
                        <h1 className="guitars">Guitars</h1>
                        <h2 className="guitar-make">Make: { guitar.make } </h2>
                        <h2 className="guitar-model">Model: { guitar.model } </h2>
                        <img 
                        src={ guitar.img } 
                        alt="guitar" 
                        className="guitar-img"
                        style= {{ height: "200px", width: "20vw"}}
                        /> 
                        <button className="delete">Delete</button>
                        <button className="edit">Edit</button> 
                     </article>
                  )
               })}
      </div>
      
   )
}

export default Display
