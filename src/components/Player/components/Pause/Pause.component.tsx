import React from 'react';

import styles from "./Pause.module.css";

import {
    PauseIcon
} from "@heroicons/react/20/solid";

interface Props {
    pause: () => void;
}

const Pause = ({pause}: Props) => {
  return (
    <div className={styles.root}>
        <div className={styles.background}>
            <button onClick={() => pause()}>
                <PauseIcon 
                    className={styles.icon}
                    aria-hidden="true"
                />
            </button>
        </div>
    </div>
  )
}

export default Pause;