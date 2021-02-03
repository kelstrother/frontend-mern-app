import React from 'react'

const Display = (props) => {

   const {players} = props
   return (
      <div>
         
         
         {players.map(player => {
            return (
               <article className="players-card">
                  <h2 className="player-name">Name:   { player.name }</h2>
                  <h3 className="player-style">Style:   { player.style }</h3>
                  <h4 className="player-age">Age:  { player.age }</h4>   
                  <img 
                  src={player.img} 
                  alt="guitar player" 
                  className="player-img"
                  style= {{ height: "200px", width: "20vw"}}
                  />           
                  <button className="delete">Delete Player</button>
               </article>  
            )
         })}
               
      </div>
   )
}

export default Display
