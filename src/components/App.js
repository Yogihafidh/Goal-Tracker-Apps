import { useState } from "react";
// import Button from "./Button.js";
import Header from "./Header.js";
import Stats from "./Stats.js";
import GoalList from "./GoalList.js";
import GoalView from "./GoalView.js";
import FormAddGoal from "./FormAddGoal.js";
import { initGoals } from "../Data.js";
import Login from "./Login.js";

function App() {
  const [goals, setGoals] = useState(initGoals);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [showAddGoals, setShowAddGoals] = useState(false);
  const [login, setLogin] = useState("");

  function handleShowAddGoals() {
    setShowAddGoals(true);
  }

  function handleCloseAddGoals() {
    setShowAddGoals(false);
  }

  function handleAddGoal(goal) {
    setGoals(() => [...goals, goal]);
  }

  function handleSelection(goal) {
    setSelectedGoal(() => (selectedGoal?.id === goal?.id ? null : goal));
  }

  function handleToggleItem(id, percentage) {
    setSelectedGoal((selectedGoal) => {
      return {
        ...selectedGoal,
        milestone: selectedGoal.milestone.map((goal) =>
          goal.id === id ? { ...goal, packed: !goal.packed } : goal
        ),
        complate: percentage === 100 ? true : false,
      };
    });
  }

  // function handleComplete(id, percentage) {
  //   setGoals(() =>
  //     goals.map((goal) =>
  //       goal.id === id
  //         ? { ...goal, complate: percentage === 100 ? true : false }
  //         : goal
  //     )
  //   );
  // }

  return (
    <div className="App">
      {!login && <Login onLogin={setLogin} />}

      {login && (
        <>
          <Header loginName={login} onAddGoal={handleShowAddGoals} />
          <Stats />
          <div className="goal-section">
            <GoalList goals={goals} onSelection={handleSelection} />
          </div>
          {showAddGoals && (
            <FormAddGoal
              onCloseGoal={handleCloseAddGoals}
              onAddGoal={handleAddGoal}
            />
          )}

          {selectedGoal && (
            <GoalView
              goals={goals}
              selectedGoal={selectedGoal}
              onCloseViewGoal={setSelectedGoal}
              onToggleItem={handleToggleItem}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
