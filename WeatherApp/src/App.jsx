import { useState , useEffect} from 'react';
import cloud from './assets/clouds.png';
import snow from './assets/snow.png'
import clear from './assets/clear.png'
import rain from './assets/rain.png'
import humidity from './assets/humidity.png';
import wind from './assets/wind.png';
import { setCity, fetchWeather } from './Slice/Slice.js';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const [citytext, setCitytext] = useState('');
  const { value: cityName, weatherData, error, loading } = useSelector((state) => state.weather);
  const [ClimateImage, setClimateImage] = useState();

  const dispatch = useDispatch();

  const submitCity = () => {
    if (citytext.trim() === '') {
      alert('Please enter a city name');
      return;
    }else{
    dispatch(setCity(citytext));
    dispatch(fetchWeather(citytext));
    setCitytext('');
    }
   
  };

  useEffect(() => {
    if (!weatherData || !weatherData.weather) return;

    const mainWeather = weatherData.weather[0].main;

    if (mainWeather === 'Clouds') {
      setClimateImage(cloud);
    } else if (mainWeather === 'Snow') {
      setClimateImage(snow);
    }else if (mainWeather === 'Clear') {
      setClimateImage(clear);
    }else if (mainWeather === 'Rain') {
      setClimateImage(rain);
    }
  }, [weatherData]); // run this effect every time weatherData changes

  return (
    // <div className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 w-lg rounded-2xl py-6 px-4 h-155'>
      
     <div className={`bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 w-lg rounded-2xl py-6 px-4 ${
    weatherData?.name ? 'h-155' : 'h-50'
  }`}> 

      <div className='text-center p-2 border-b-2 border-black rounded-md'>
        <h1 className='text-4xl font-bold text-emerald-950 tracking-wide'>Weather App</h1>
      </div>

      <div className='p-1'>
        {/* Input */}
        <input
          type="text"
          placeholder='Enter City/ State/ Country name'
          value={citytext}
          onChange={(e) => setCitytext(e.target.value)}
          className='p-2 text-lg font-bold text-center text-black w-90 mx-2 outline-none border-b-2 border-white focus:border-b-4 focus:border-black'
        />
        <button
          className='p-2 rounded-3xl font-bold mx-2 w-10 cursor-pointer'
          onClick={submitCity}
        >
          <i className="fa-solid fa-magnifying-glass text-2xl hover:text-gray-700"></i>
        </button>
      </div>

      {/* Weather Display */}
      <div>
        <section className='flex justify-center text-center pb-4 border-x-2 border-gray-700 rounded-2xl shadow-2xl'>
          {loading ? (
            <p className='text-white text-xl'>Loading...</p>
          ) : error ? (
            <p className='text-red-600 text-xl'>Error: {error}</p>
          ) : weatherData ? (
            <div>
              <img src={ClimateImage} alt="Weather" width="175" height="175" />

              <label className='text-5xl font-bold'>
                {Math.round(weatherData.main.temp)}°C
              </label>
              <h2 className="font-extrabold text-5xl">{weatherData.name}</h2>
            </div>
          ) : (
            <p className='text-white'>Search a city to get weather info.</p>
          )}
        </section>

        {weatherData && (
          <div className="flex justify-evenly items-center text-center mt-4 p-4 space-x-8">
            {/* Humidity */}
            <div className="flex flex-col items-center">
              <img src={humidity} alt="Humidity Icon" width="60" height="60" />
              <label className="text-3xl font-semibold">{weatherData.main.humidity}%</label>
              <p className="text-2xl text-gray-900 font-extrabold">HUMIDITY</p>
            </div>

            {/* Wind Speed */}
            <div className="flex flex-col items-center">
              <img src={wind} alt="Wind Icon" width="60" height="60" />
              <label className="text-3xl font-semibold">{weatherData.wind.speed} km/h</label>
              <p className="text-2xl text-gray-900 font-extrabold">WIND SPEED</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
