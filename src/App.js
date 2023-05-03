import logo from './logo.svg';
import './App.css';

function App() {
  const CLIENT_ID = "ab747e71bc2248c7bfe705d183236c54"
  const REDIRECT_URI = "http://localhost:3000/auth/callback"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}

      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>

    </div>
  );
}

export default App;
