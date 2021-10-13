import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlayerPage.scss';
import PlayerListItem from '../common/PlayerListItem/PlayerListItem.js';

const PlayerPage = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/player');
            setPlayers(data);
        }
        fetchData();
    }, []);

    return (
        <div className="Playerpage">
            <div className="Playerpage-body">
                {
                    players.map((player, key) => {
                        return (
                            <PlayerListItem key={key} data={player}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PlayerPage;