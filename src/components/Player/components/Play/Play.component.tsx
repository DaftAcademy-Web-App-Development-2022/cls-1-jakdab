import React from 'react';

import styles from "./Play.module.css";

import {
    PlayIcon
} from "@heroicons/react/20/solid";

interface Props {
    play: () => void;
}

const Play = ({play}: Props) => {
  return (
    <div className={styles.root}>
        <div className={styles.background}>
            <button onClick={() => play()}>
                <PlayIcon 
                    className={styles.icon}
                    aria-hidden="true"
                />
            </button>

        </div>
    </div>
  )
}

export default Play;