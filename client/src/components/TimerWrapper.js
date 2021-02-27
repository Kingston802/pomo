import React, { useEffect, useRef, useState } from 'react';
import './TimerWrapper.css';
import Timer from 'react-compound-timer';
import ding from '../assets/sounds/alert.mp3';

function TimerWrapper(props) {
  const audio = useRef(null);
  const [timerState, setTimerState] = useState('off');

  useEffect(() => {
    switch (timerState) {
      case 'on':
        console.log('on');
        if (props.items.length > 0) {
          // update current item
          document.querySelector('.CurrentItem').innerHTML = props.items[0].key;
        }  else {
          document.querySelector('.CurrentItem').innerHTML = '';
        }
        break;
      case 'off':
        document.querySelector('.CurrentItem').innerHTML = '';
        break;
      case 'finished':
        console.log('finished');
        // play ding!
        audio.current.play();
        // remove top task
        let newItems = [...props.items];
        newItems.splice(0,1);
        props.setItems(newItems);
        setTimerState('off');
        break;
      default:
        console.log('default');
    }
  }, [props.setItems, props.items, timerState]);

  return (
    <div className="TimerWrapper">
      <Timer
        initialTime={1500000} // 25 minutes in ms
        startImmediately={false}
        direction="backward"
        onStart={() => {
          // change timer state 
          setTimerState('on');
        }}
        onStop={() => {
          // toggle timer state 
          setTimerState('off');
        }}
        onReset={() => {
          setTimerState('off');
        }}
        checkpoints={[
          {
            time: 0,
            callback: () => setTimerState('finished') 
          },
        ]}
      >
        {({ start, stop, reset }) => (
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