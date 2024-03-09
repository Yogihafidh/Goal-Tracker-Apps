import { useState } from "react";
import Button from "./Button.js";

export default function FormAddGoal({ onCloseGoal, onAddGoal }) {
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [milestones, setMilestones] = useState("");
  const milestone = milestones.split(",").map((el) => {
    const a = {
      id: crypto.randomUUID(),
      item: el.trim(),
      packed: false,
    };

    return a;
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!goal || !image || !description || !milestones) return;

    const id = crypto.randomUUID();

    const newGoal = {
      id,
      goal,
      image,
      complate: false,
      description,
      milestone,
    };

    onAddGoal(newGoal);

    // Riset Form
    setGoal("");
    setImage("");
    setDescription("");
    setMilestones("");
    onCloseGoal(false);
  }

  return (
    <>
      <div className="overlay"></div>
      <form className="form-add-goal" onSubmit={handleSubmit}>
        <h2>Add Goal</h2>

        <Button className={"closeButton"} onClick={onCloseGoal}>
          X
        </Button>

        <label>Goal</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Milestone</label>
        <input
          type="text"
          value={milestones}
          onChange={(e) => setMilestones(e.target.value)}
        />

        <Button className={"button"}>Add</Button>
      </form>
    </>
  );
}
