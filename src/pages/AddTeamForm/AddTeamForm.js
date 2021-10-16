import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

import './AddTeamForm.scss';


const AddTeamForm = ({ closeModalFn, values, changeFn, submitFn }) => {
  const [teams, setTeams] = useState([]);
  const [showExistsError, setShowExistsError] = useState(false)

  useEffect(() => {
    const getTeamData = async () => {
      const { data } = await axios.get('/team');
      console.log(data)
      setTeams(data);
    }
    getTeamData()
  }, []);

  const onSubmit = async (e) => {
    if (teams.includes(e.target.value)) {
      setShowExistsError(true);
      return;
    } 
    submitFn(e);
  }


  return (
    <Modal onBackgroundClick={() => closeModalFn(false)}>
      {showExistsError && <div>Team already exists!</div>}
        <form>
            <label htmlFor="name">Name</label><br />
            <input name="name" id="name" value={values.name} onChange={(e) => changeFn(e.target.value, e.target.name)}/><br />
            <Button onClick={(e) => onSubmit(e)}>Submit</Button>
        </form>
    </Modal>
  )
}

export default AddTeamForm;