import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";

import { 
  Play, 
  Pause,
  ProgressBar,
  TimeStamp,
  Volume
} from "~/components/Player/components";

const Player = () => {
  const { state, actions} = usePlayer()
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {state.playing ? (
          <Pause pause={() => actions.pause()}/>
        ) : (
          <Play play={() => actions.play({
            id: trackData.id,
            name: trackData.name,
            src: trackData.preview_url,
            artists: trackData.artists.map(artist => artist.name)
          })}/>
        )}

        <div className="w-full px-4">
          <p className="text-ui1">Californication</p>
          <ProgressBar
            progress={state.progress}
          />
          <p>Red Hot Chili Peppers</p>
        </div>

        <TimeStamp
          currentTime={state.currentTime}
          duration={state.duration}
        />

        <div>
          <Volume 
            
          />
        </div>
      </div>
    </div>
  );
};

export default Player;