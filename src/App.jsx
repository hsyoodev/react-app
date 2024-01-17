import { useEffect, useState } from 'react';
import Area from './components/Area';
import Clock from './components/Clock';
import Weather from './components/Weather';

function App() {
  const [area, setArea] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      get(lat, lon);
    });

    async function get(lat, lon) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31`
      );
      const res = await data.json();
      const name = res.name;
      setArea({ name, lat, lon });

      const icon = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
      const temp = res.main.temp;
      const speed = res.wind.speed;
      const main = res.weather[0].main;
      setWeather({ icon, temp, speed, main });
    }
  }, []);

  return (
    <>
      <Clock />
      <Area data={area} />
      <Weather data={weather} />
    </>
  );
}

export default App;
