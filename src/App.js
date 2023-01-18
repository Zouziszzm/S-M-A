import './App.css';
import {User} from './users.js';
function App() {
    const users= [{name:"farhaan" ,age: 23}];
    return(
        <div className="App">
        {users.map((user, key) => {
            return<User name={user.name} age={user.age}/>
        })}
        </div>
    );
}
export default App;
