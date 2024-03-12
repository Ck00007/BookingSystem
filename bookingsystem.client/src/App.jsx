import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home.jsx'
import List from '../src/pages/list/List.jsx'
import Hotel from '../src/pages/hotel/Hotel.jsx'

function App() {

    return (
        <BrowserRouter>
            <div className="App container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/hotels' element={<List />} />
                    <Route path='/hotels/:id' element={<Hotel />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

//function App() {
//    const [forecasts, setForecasts] = useState();

//    useEffect(() => {
//        populateWeatherData();
//    }, []);

//    const contents = forecasts === undefined
//        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//        : <table className="table table-striped" aria-labelledby="tabelLabel">
//            <thead>
//                <tr>
//                    <th>Date</th>
//                    <th>Temp. (C)</th>
//                    <th>Temp. (F)</th>
//                    <th>Summary</th>
//                </tr>
//            </thead>
//            <tbody>
//                {forecasts.map(forecast =>
//                    <tr key={forecast.date}>
//                        <td>{forecast.date}</td>
//                        <td>{forecast.temperatureC}</td>
//                        <td>{forecast.temperatureF}</td>
//                        <td>{forecast.summary}</td>
//                    </tr>
//                )}
//            </tbody>
//        </table>;

//    return (
//        <div>
//            <h1 id="tabelLabel">Weather forecast</h1>
//            <p>This component demonstrates fetching data from the server.</p>
//            {contents}
//        </div>
//    );
    
//    async function populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const data = await response.json();
//        setForecasts(data);
//    }
//}

export default App;