import './App.css';
import {User} from './users.js';
function App() {
    const useit =[
        {name:"pedro",age:23},
        {name:"farhaan",age:23}
    ];
  return (
    <div className="App">
      {useit.map((user,key) => {
          return(
              <User name={user.name} age={user.age}/>)
      })}
    </div>
  );
}
export default App;
