import React from 'react';
import { Range } from "react-range";
import ReactSlider from "react-slider";

import styles from "./Volume.module.css";

import {
    SpeakerWaveIcon
} from "@heroicons/react/20/solid";

interface Props { 
    volumechange: () => number;
}

const Volume = ({volumechange}: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleShow = () => setShowModal(true);
	const [values, setValues] = React.useState([0])
	const [value, setValue] = React.useState(0)

  return (
    <div className={styles.root}>
        <div className={styles.background}>
            <button onClick={handleShow}>
                <SpeakerWaveIcon
                    className={styles.icon}
                    aria-hidden="true"
                />
            </button> {
              showModal ? (
            
              <div className="absolute bottom-24 right-8 p-4 lg:border lg:border-ui4 bg-ui7 rounded-md">
                <div className="w-32">
                  <Range
                    step={1}
                    min={0}
                    max={75}
                    values={values}
                    onChange={(values) => {
                      setValues(values)
                    }}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="w-full h-2 p-1 mr-4 bg-ui3 rounded-full"
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        className="w-4 h-4 transform translate-x-10 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ui2"
                      />
                    )}
                  />
                </div>
              </div>
            ) : null }
        </div>
    </div>    
  )
}

export default Volume;