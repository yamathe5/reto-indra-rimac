import './App.css';

import LoginPage from './pages/LoginPage';

import { useAuth } from './context/auth-context';
import AuthenticatedApp from './AuthenticatedApp';



import "./styles"

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      { !user? <LoginPage/> : <AuthenticatedApp/>}
    </div>
  );
}

export default App;
