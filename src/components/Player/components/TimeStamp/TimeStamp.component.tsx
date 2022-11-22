import React from 'react';

import styles from "./TimeStamp.module.css";

interface Props {
    currentTime: number;
    duration: number;
  }

const TimeStamp = ({currentTime, duration}: Props) => {
    const formattedCurrentTime = secondsToTime(currentTime);
    const formattedDuration = secondsToTime(duration);
  
    return (
        <div className={styles.timer}>
            <p>{formattedCurrentTime} / {formattedDuration}</p>
        </div>
    )
};

function secondsToTime(e: number) {
    const min = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
      sec = Math.floor(e % 60).toString().padStart(2, '0');
  
    return min + ':' + sec;
  }

export default TimeStamp;