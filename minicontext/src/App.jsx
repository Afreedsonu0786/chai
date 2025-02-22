import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvd from "./context/UserContextProvd";

function App() {
  return (
    <UserContextProvd>
      <h1>Afreed</h1>
      <Login />
      <Profile />
    </UserContextProvd>
  );
}

export default App;
