import './AdminPage.scss';
import React, { useState} from 'react';
import axios from 'axios';
import Button from '../components/Button/Button';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';

function AdminPage() {
    const [addPlayerModal, setAddPlayerModal] = useState(false);
    const [newPlayerValues, setNewPlayerValues] = useState({
        name: "",
        team: "",
        position: ""
    });

    const submitForm = () => {
        const { data } = axios.post('/player/')
        setAddPlayerModal(false)
    }

    const onFormChange = (value, inputName) => {
        setNewPlayerValues({...newPlayerValues, [inputName]: value})
    }
    return (
        <div className="Adminpage">
            <div className="Adminpage-body">
                <Button onClick={() => setAddPlayerModal(true)}>Add Players</Button>
                {
                    addPlayerModal && (<AddPlayerForm closeModalFn={setAddPlayerModal} changeFn={onFormChange} values={newPlayerValues} submitFn={submitForm}/>) 
                }
            </div>
        </div>
    );
}

export default AdminPage;