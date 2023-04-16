import './App.css';
import Wind from './components/widgets/wind/Wind';
import NavBar from './components/widgets/navbar/NavBar';

function App() {
  // const [spot, setSpot] = useState(0);

  // const surfSpot = () => {
  //   axios
  //     .get(
  //       'https://api.open-meteo.com/v1/forecast?latitude=43.468&longitude=-1.5733&hourly=temperature_2m,precipitation,rain,windspeed_10m,winddirection_10m'
  //     )
  //     .then((response) => {
  //       setSpot(response.data.results[0]);
  //     });
  // };

  return (
    <div className="App">
      <NavBar />
      <Wind />
    </div>
  );
}

export default App;
