import './App.css';

const Person = ({ name, lastname, age }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Last name: {lastname}</h2>
      <h2>Age: {age}</h2>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Person name='Julia' lastname='Pousa' age='30' />
      <Person name='Juan' lastname='Pito' age='34' />
      <Person name='Chuperto' lastname='Herna' age='23' />
      <Person name={'Fran'} lastname={'Osorio'} age={'27'} />
    </div>
  );
}

export default App;
