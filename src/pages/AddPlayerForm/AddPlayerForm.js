import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

import './AddPlayerForm.scss';

const posOptions = ["C", "P", "1B", "2B", "3B", "SS", "RF", "LF", "CF", "RCF", "LCF", "Water Boy", "Umpire"];

const AddPlayerForm = ({ closeModalFn, values, changeFn, submitFn }) => {
  const [teamOptions, setTeamOptions] = useState([]);

  useEffect(() => {
    const getTeamData = async () => {
      const { data } = await axios.get('/team');
      console.log(data)
      setTeamOptions(data);
    }
    getTeamData()
  }, [])


  return (
    <Modal onBackgroundClick={() => closeModalFn(false)}>
        <form>
            <label htmlFor="name">Name</label><br />
            <input name="name" id="name" value={values.name} onChange={(e) => changeFn(e.target.value, e.target.name)}/><br />
            <label htmlFor="team">Team</label><br />
            <select name="team" id="team" value={values.team} onChange={(e) => changeFn(e.target.value, e.target.name)}>
            {
              teamOptions.map(team => (
                <option>{team.name}</option>
              ))
            }
            </select><br />
            <label htmlFor="position">Position</label><br />
            <select name="position" id="position" value={values.position} onChange={(e) => changeFn(e.target.value, e.target.name)}>
            {
              posOptions.map(pos => (
                <option>{pos}</option>
              ))
            }
            </select><br />
            <Button onClick={(e) => submitFn(e)}>Submit</Button>
        </form>
    </Modal>
  )
}

export default AddPlayerForm;