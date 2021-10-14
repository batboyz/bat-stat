import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

const AddPlayerForm = ({ closeModalFn, values, changeFn, submitFn }) => {
  return (
    <Modal onBackgroundClick={() => closeModalFn(false)}>
        <form>
            <label for="name">Name</label>
            <input name="name" id="name" value={values.name} onChange={(e) => changeFn(e.target.value, e.target.name)}/>
            <br />
            <label for="team">Team</label>
            <input name="team" id="team" value={values.team} onChange={(e) => changeFn(e.target.value, e.target.name)}/>
            <br />
            <label for="position">Position</label>
            <input name="position" id="position" value={values.position} onChange={(e) => changeFn(e.target.value, e.target.name)}/>
            <br />
            <Button onClick={submitFn}>Submit</Button>
        </form>
    </Modal>
  )
}

export default AddPlayerForm;