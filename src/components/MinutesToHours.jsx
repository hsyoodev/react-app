import { useState } from 'react';

const MinutesToHours = () => {
  const [isDisabled, setDisabled] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const onChangeMinutes = (e) => {
    const minutes = parseInt(e.target.value);
    e.target.value = minutes;
    setMinutes(minutes);
    setHours(minutes / 60);
  };
  const onChangeHours = (e) => {
    const hours = parseInt(e.target.value);
    e.target.value = hours;
    setMinutes(hours * 60);
    setHours(hours);
  };
  const onClickReset = () => {
    setMinutes(0);
    setHours(0);
  };
  const onClickFlip = () => {
    setDisabled(!isDisabled);
  };

  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          id="minutes"
          value={minutes}
          onChange={onChangeMinutes}
          placeholder="Minutes"
          disabled={isDisabled}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          id="hours"
          value={hours}
          onChange={onChangeHours}
          placeholder="Hours"
          disabled={!isDisabled}
        />
      </div>
      <button onClick={onClickReset}>Reset</button>
      <button onClick={onClickFlip}>Flip</button>
    </div>
  );
};

export default MinutesToHours;
