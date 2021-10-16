import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

const AddPlayerForm = ({ closeModalFn, values, changeFn, submitFn }) => {
  return (
    <Modal onBackgroundClick={() => closeModalFn(false)}>
        <form>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" value={values.name} onChange={(e) => changeFn(e.target.value, e.target.name)}/>
            <br />
            <label htmlFor="team">Team</label>
            <input name="team" id="team" value={values.team} onChange={(e) => changeFn(e.target.value, e.target.name)}/>
            <br />
            <label htmlFor="position">Position</label>
            <input name="position" id="position" value={values.position} onChange={(e) => changeFn(e.target.value, e.target.name)}/>
            <br />
            <Button onClick={(e) => submitFn(e)}>Submit</Button>
        </form>
    </Modal>
  )
}

export default AddPlayerForm;