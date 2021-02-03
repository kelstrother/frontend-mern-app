import React from 'react'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Display from './Display'
import Form from './Form'

function App() {

  const url = 'http://kels-mern-app.herokuapp.com'

  // STATE
  const [players, setPlayers] = React.useState([])
  const [guitars, setGuitars] = React.useState([])

  // PLAYER FORM
  const emptyPlayer = {
    name: '',
    age: Number,
    style: '',
    img: ''
  }
  const emptyGuitar = {
    make: '',
    model: '',
    img: ''
  }

  // UPDATE STATE
  const [editPlayer, setEditPlayer] = React.useState(emptyPlayer)

  // PULL UP THE PLAYERS
  const getPlayers = () => {
    fetch(url + '/player')
    .then(response => response.json())
    .then(data => {
      setPlayers(data)
    })
  }
  // PULL UP GUITARS
  const getGuitars = () => {
    fetch(url + '/guitar')
    .then(response => response.json())
    .then(data => {
      setGuitars(data)
    })
  }
  
  React.useEffect(() => {
    getPlayers()
    getGuitars()
  }, [])

// CREATING NEW PLAYER
const handleCreate = (newPlayer) => {
  fetch(url + '/player', {
    method: 'post', headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newPlayer)
  })
  .then(() => {
    getPlayers()
  })
}

// SELECTING A PLAYER
const selectPlayer = (player) => {
  setEditPlayer(player)
}

// DELETE PLAYER
const deletePlayer = (player) => {
  fetch(url + '/player' + player.id, {
    method: 'delete'
  })
  .then(() => {
    getPlayers()
  })
}


  return (
    <div className="App">
      <h1>Guitar Players</h1>
      <Link to='/create'>
        <button className="create-btn">Create A Player</button>
        <button className="create-btn">Create A Guitar</button>
      </Link>
      {/* <Switch> */}
      <Route exact path= '/' render= {(rp) => (
        <Display 
        {...rp} 
        players = { players } 
        selectPlayer = { selectPlayer }
        deletePlayer= { deletePlayer }
        guitars = { guitars }
        />
      )}>
      </Route>
      <Route path='/create' render= {(rp) => (
        <Form 
        label = 'create' 
        player= {emptyPlayer} 
        handleSubmit= { handleCreate } 
        />
      )}>
      </Route>
      {/* </Switch> */}
      
     
    </div>
  );
}

export default App;
