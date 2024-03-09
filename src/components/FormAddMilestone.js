import Button from "./Button.js";
export default function FormAddMilestone() {
  return (
    <>
      <div className="overlay hidden"></div>
      <form className="form-add-goal hidden ">
        <h2>Add Goal</h2>

        <Button className={"closeButton"}>X</Button>

        <label>Goal</label>
        <input type="text" />

        <label>Image</label>
        <input type="text" />

        <label>Description</label>
        <input type="text" />

        <label>Milestone</label>
        <input type="text" />

        <Button className={"button"}>Add</Button>
      </form>
    </>
  );
}
