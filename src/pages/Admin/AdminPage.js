import "./AdminPage.scss";
import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button/Button";
import BallCounter from "../components/BatCounter/BatCounter";
import AddPlayerForm from "../AddPlayerForm/AddPlayerForm";
import AddTeamForm from "../AddTeamForm/AddTeamForm";

function AdminPage() {
  const [addPlayerModal, setAddPlayerModal] = useState(false);
  const [addTeamModal, setAddTeamModal] = useState(false);
  const [newPlayerValues, setNewPlayerValues] = useState({
    name: "",
    team: "",
    position: "",
  });
  const [newTeamValues, setNewTeamValues] = useState({
    name: ""
  });

  const submitPlayerForm = async (e) => {
    e.preventDefault();
    await axios.post("/player", newPlayerValues); 
    setAddPlayerModal(false);
  };

  const submitTeamForm = async (e) => {
    e.preventDefault();
    await axios.post("/team", newTeamValues); 
    setAddPlayerModal(false);
  };

  const onPlayerFormChange = (value, inputName) => {
    setNewPlayerValues({ ...newPlayerValues, [inputName]: value });
  };

  const onTeamFormChange = (value, inputName) => {
    setNewTeamValues({ ...newTeamValues, [inputName]: value });
  };
  return (
    <div className="Adminpage">
      <div className="Adminpage-body">
        <Button onClick={() => setAddPlayerModal(true)}>Add Player</Button>
        <Button onClick={() => setAddTeamModal(true)}>Add Team</Button>
        {addPlayerModal && (
          <AddPlayerForm
            closeModalFn={setAddPlayerModal}
            changeFn={onPlayerFormChange}
            values={newPlayerValues}
            submitFn={submitPlayerForm}
          />
        )}
        {addTeamModal && (
          <AddTeamForm
            closeModalFn={setAddTeamModal}
            changeFn={onTeamFormChange}
            values={newTeamValues}
            submitFn={submitTeamForm}
          />
        )}
      </div>
      <BallCounter />
    </div>
  );
}

export default AdminPage;
