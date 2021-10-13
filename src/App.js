import React, {useState} from 'react';
import './App.css';
import Form from './Form';

const playerList = [
  {playerName: 'Paul Konerko', playerEmail: 'pkonerko@whitesox.com', role: 'First Baseman'},
  {playerName: 'Jose Abreu', playerEmail: 'jabreu@whitesox.com', role: 'First Baseman'},
  {playerName: 'Liam Hendriks', playerEmail: 'lhendriks@whitesox.com', role: 'Pitcher'}
]

const initialFormValues = {playerName: '', playerEmail:'', role:''};

function App() {
  const [players, setPlayers]= useState(playerList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const {name, value} = evt.target;
    setFormValues({ ...formValues, [name]: value}
      );
  }

  const submit = (evt) => {
    evt.preventDefault();

    const newPlayer = {
      playerName: formValues.playerName.trim(),
      playerEmail: formValues.playerEmail.trim(),
      role: formValues.role
    }
    setPlayers(players.concat(newPlayer));
    setFormValues(initialFormValues);
  }


  return (
    <div className="App">
    <h2>Hello world!</h2>
    {players.map((player, idx)=> (
      <div key={idx}>
         {player.playerName} is a {player.role} and their email is {player.playerEmail}
         </div>
    ))}
    <Form change={change} submit={submit} formValues={formValues}/>
    </div>
  );
}

export default App;
