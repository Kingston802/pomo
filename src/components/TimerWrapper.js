import React from 'react';
import './TimerWrapper.css';
import Timer from 'react-compound-timer';

function TimerWrapper() {
  return (
    <div className="TimerWrapper">
      <Timer
        initialTime={1500000} // 25 minutes in ms
        startImmediately={false}
        direction="backward"
        onStart={() => console.log('onStart hook')}
        onResume={() => console.log('onResume hook')}
        onPause={() => console.log('onPause hook')}
        onStop={() => console.log('onStop hook')}
        onReset={() => console.log('onReset hook')}
      >
        {({ start, resume, pause, stop, reset, timerState }) => (
            <React.Fragment>
                <div>
                    <Timer.Hours /> hours 
                    <br></br>
                    <Timer.Minutes /> minutes 
                    <br></br>
                    <Timer.Seconds /> seconds 
                </div>
                <br />
                <div>
                    <button onClick={start}>Start</button>
                    <button onClick={pause}>Pause</button>
                    <button onClick={resume}>Resume</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </React.Fragment>
        )}
      </Timer>
    </div>
  )
}

export default TimerWrapper 