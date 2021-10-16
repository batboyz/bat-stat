import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlayerPage.scss';
import PlayerListItem from '../common/PlayerListItem/PlayerListItem.js';
import Button from '../common/Button/Button';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';

const PlayerPage = () => {
    const [players, setPlayers] = useState([]);
    const [addPlayerModal, setAddPlayerModal] = useState(false);
    const [newPlayerValues, setNewPlayerValues] = useState({
        name: "",
        team: "",
        position: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/player');
            setPlayers(data);
        }
        fetchData();
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        const { data: postData } = await axios.post('/player', newPlayerValues)
        console.log(postData)
        if (postData.status === "Success!") {
            const { data: getData } = await axios.get("/player")
            setPlayers(getData)
        } else {
            console.log("Error!")
        }
        setAddPlayerModal(false)
    }

    const onFormChange = (value, inputName) => {
        setNewPlayerValues({...newPlayerValues, [inputName]: value})
    }

    return (
        <div className="Playerpage">
            <div className="Playerpage-body">
                <Button onClick={() => setAddPlayerModal(true)}>Add Players</Button>
                <div className="player-list">
                {
                    players.map((player, key) => {
                        return (
                            <PlayerListItem key={key} data={player}/>
                            )
                        })
                    }
                </div>
                {
                    addPlayerModal && (<AddPlayerForm closeModalFn={setAddPlayerModal} changeFn={onFormChange} values={newPlayerValues} submitFn={submitForm}/>) 
                }
            </div>
        </div>
    );
}

export default PlayerPage;