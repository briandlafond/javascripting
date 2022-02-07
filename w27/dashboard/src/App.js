import './App.css';
import Affirmation from './components/Affirmations';
import Weather from './components/Weather';
import News from './components/News';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Affirmation></Affirmation>
      <Weather></Weather>
      <News></News>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
