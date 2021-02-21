import React, { useEffect, useRef, useState } from 'react';
import './TimerWrapper.css';
import Timer from 'react-compound-timer';
import ding from '../assets/sounds/alert.mp3';

function TimerWrapper(props) {
  const audio = useRef(null);
  const [timerState, setTimerState] = useState(false);

  function TimerFinished() {
    // play ding!
    audio.current.play();
  };

  useEffect(() => {
    if (timerState && props.items.length > 0) {
      // update current item
      document.querySelector('.CurrentItem').innerHTML = props.items[0].key;
    }
  });

  return (
    <div className="TimerWrapper">
      <Timer
        initialTime={1500000} // 25 minutes in ms
        startImmediately={false}
        direction="backward"
        onStart={() => {
          // toggle timer state 
          setTimerState(!timerState);
        }}
        onStop={() => {
          // toggle timer state 
          setTimerState(!timerState);
        }}
        onReset={() => {
          setTimerState(false);
        }}
        checkpoints={[
          {
            time: 0,
            callback: TimerFinished
          }
        ]}
      >
        {({ start, resume, pause, stop, reset, timerState }) => (
            <React.Fragment>
                <div className="digit">
                    <span className="min"><Timer.Minutes /> m</span>
                    <span className="sec"><Timer.Seconds /> s</span>
                </div>
                <br />
                <div>
                    <button onClick={start}>Start</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </React.Fragment>
        )}
      </Timer>
      <p className="CurrentItem"></p>
      <audio ref={audio} style={ {display: 'none'} } src={ding}></audio>
    </div>
  )
}

export default TimerWrapper 