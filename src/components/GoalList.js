import Button from "./Button.js";
export default function GoalList({ goals, onSelection }) {
  return (
    <ul>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.id} onSelection={onSelection} />
      ))}
    </ul>
  );
}

function Goal({ goal, onSelection }) {
  return (
    <li>
      <img src={goal.image} alt={goal.goal} className="goal-image" />
      <div className="goal-content">
        <h3>{goal.goal}</h3>
        <p>{goal.description}</p>
        <Button className={"button"} onClick={() => onSelection(goal)}>
          Open
        </Button>
      </div>
    </li>
  );
}
