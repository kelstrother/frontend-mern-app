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

  // UPDATE PATH
  const [editPlayer, setEditPlayer] = React.useState(emptyPlayer)

  // PULL UP THE PLAYERS
  const getPlayers = () => {
    fetch(url + '/player')
    .then(response => response.json())
    .then(data => {
      setPlayers(data)
    })
  }
  
  React.useEffect(() => {
    getPlayers()
  }, [])

// CREATING NEW PLAYER
const handleCreate = (newPlayer) => {
  fetch(url + '/create', {
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
  fetch(url + '/player' + player.name, {
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
      </Link>
      {/* <Switch> */}
      <Route exact path= '/' render= {(rp) => (
        <Display 
        {...rp} 
        players = { players } 
        selectPlayer = { selectPlayer }
        deletePlayer= { deletePlayer }
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
