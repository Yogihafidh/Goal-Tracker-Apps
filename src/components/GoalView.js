import Button from "./Button.js";
import Milestone from "./Milestone.js";

export default function GoalView({
  selectedGoal,
  onCloseViewGoal,
  onToggleItem,
  onComplate,
}) {
  const numMilestone = selectedGoal.milestone.length;
  const numPacked = selectedGoal.milestone.filter((item) => item.packed).length;
  const percentageMilestone = Math.round((numPacked / numMilestone) * 100);

  return (
    <>
      <div className="overlay"></div>
      <div className="task">
        <img src={selectedGoal.image} alt={selectedGoal.goal} />

        <div className="task-content">
          <h2>{selectedGoal.goal}</h2>
          <p className="description">{selectedGoal.description}</p>
          <p>
            {percentageMilestone === 100
              ? "Congratulation, You got everything"
              : `You have ${numMilestone} milestone on your goal, and you already
            packed ${numPacked} (${percentageMilestone}%)`}
          </p>
          <p>Milestone</p>
          <ul>
            {selectedGoal?.milestone.map((obj) => (
              <Milestone
                milestone={obj}
                key={obj.id}
                onToggleItem={onToggleItem}
                percentage={percentageMilestone}
              />
            ))}
          </ul>
        </div>
        <Button
          className="closeButton closeButtonView"
          onClick={() => onCloseViewGoal(null)}
        >
          X
        </Button>
      </div>
    </>
  );
}
