import React, { Component }  from 'react';
import { useLastFM } from 'use-last-fm';


const CurrentlyPlaying = () => {
    const lastFM =  useLastFM('roberto_in7', '1af211e21f18e73f8d9eb3b6d5119c24')
    return (
        lastFM.status !== 'playing' ? (
            <p style={{fontSize:12,position:'absolute', bottom:10, left:0, right:0}}></p>
        ) :  (
            <>
            <p style={{fontSize:12,position:'absolute', bottom:10, left:0, right:0}}>
                Currently Listening to {lastFM.song.name} by {lastFM.song.artist}...
            </p>
            </>
        )
    )
};

export default CurrentlyPlaying;