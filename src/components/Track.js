import React from 'react';
import { useLastFM } from 'use-last-fm';


const CurrentlyPlaying = () => {
    const lastFM =  useLastFM('roberto_in7', '1af211e21f18e73f8d9eb3b6d5119c24')
    console.log(lastFM);
    return (
        lastFM.status !== 'playing' ? (
            <h1>ROBERTO INFANTE</h1>
        ) :  (
            <>
    
                <h2>
                    {lastFM.song.name.toUpperCase()}
                </h2>
    
                <img alt="" src={lastFM.song.art}></img>    
            </>
        )
    )
};

export default CurrentlyPlaying;