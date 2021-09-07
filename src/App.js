import './App.css';
import Header from "./components/Header";
import ProfilePage from "./components/pages/ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProfilePage></ProfilePage>
    </div>
  );
}

export default App;
