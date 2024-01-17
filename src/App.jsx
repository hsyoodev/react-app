import { useEffect, useState } from 'react';

function NameForm({ setName }) {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(`입력한 이름: ${value}`);
    setName(value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

function TextAreaForm({ setRequest }) {
  const [value, setValue] = useState('요청사항을 입력하세요.');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(`입력한 요청사항: ${value}`);
    setRequest(value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        요청사항:
        <textarea value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

function SelectForm({ setSelect }) {
  const [value, setValue] = useState('grape');
  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = (event) => {
    alert(`선택한 과일: ${value}`);
    setSelect(value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요:
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>{' '}
          <option value="banana">바나나</option>
          <option value="grape">포도</option>{' '}
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

function Map({ latlon }) {
  const kakao = window.kakao;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(latlon.lat, latlon.lon),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, [latlon]);

  return <div id="map" style={{ width: '500px', height: '400px' }}></div>;
}

function App() {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [select, setSelect] = useState('');
  const [latlon, setLatLon] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      console.log(lat, lon);
      setLatLon({ lat, lon });
    });
  }, []);

  return (
    <>
      <NameForm setName={setName} />
      <TextAreaForm setRequest={setRequest} />
      <SelectForm setSelect={setSelect} />
      <hr />
      이름 : {name}, 요청사항 : {request}, 과일 : {select}
      <Map latlon={latlon} />
    </>
  );
}

export default App;
