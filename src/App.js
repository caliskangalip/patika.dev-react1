import './App.css';

import Header from './components/Header';
import User, {FriendList} from './components/User';

function App() {
  const getFriends=FriendList();
  return (
    <>
    <Header />
    <User name="Galip" surName="ÇALIŞKAN" age={18} friends={getFriends} isLoggedIn={false} />
    <User name="Arthur" surName="RIMBAUD" age={70} friends={FriendList()} isLoggedIn={true} />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
