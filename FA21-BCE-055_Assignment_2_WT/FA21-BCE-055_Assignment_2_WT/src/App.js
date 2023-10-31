import './App.css';
import Header_img from './components/Header_img';
import Athlete_info from './components/Athlete_info';
import Parent_info from './components/Parent_info';
import Emergency from './components/Emergency';
import Submission from './components/Submission';

function App() {
  return (
    <div className="App">
      <Header_img />
      <Athlete_info />
      <Parent_info />
      <Emergency />
      <Submission />
      </div>
  );
}

export default App;
