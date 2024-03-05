const goals = [
  {
    id: 1,
    name: "Belajar Fotografi",
    image:
      "https://images.unsplash.com/photo-1682687219800-bba120d709c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    task: 0,
    description: "Belajar fotografi untuk dapat kerja",
    milestone: ["Belajar ISO", "Membeli camera"],
  },
  {
    id: 2,
    name: "Belajar Node.JS",
    image:
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9kZSUyMGpzfGVufDB8fDB8fHww",
    task: 0,
    description: "Belajar Node.jS untuk dapat membangun aplikasi backend",
    milestone: ["Mempelajari javascript", "Membuat API"],
  },
  {
    id: 3,
    name: "Belajar Masak",
    image:
      "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D",
    task: 0,
    description: "Belajar masak untuk dapat memasakan istri",
    milestone: ["Mempelajari javascript", "Membuat API"],
  },
];

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Stats />
      <div className="goal-section">
        <GoalList goals={goals} />
      </div>
      <GoalView />
      <FormAddGoal />
      <FormAddTask />
    </div>
  );
}
function Header() {
  return (
    <header>
      <p>Good evening, Yono!</p>
      <img src="./logo.png" alt="Logo" />
      <Button className={"buttonNav"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>

        <p>Add Goal</p>
      </Button>
    </header>
  );
}

function Stats() {
  return (
    <div className="stats">
      <h2>Your Goal</h2>
      <p>You have X goal, and you already goal X (X%)</p>
    </div>
  );
}

function GoalList({ goals }) {
  return (
    <ul>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.id} />
      ))}
    </ul>
  );
}

function Goal({ goal }) {
  return (
    <li>
      <div className="goal-image">
        <img src={goal.image} alt={goal.name} />
      </div>
      <div className="goal-content">
        <h3>{goal.name}</h3>
        <p>{goal.description}</p>
        <Button className={"button"}>Open</Button>
      </div>
    </li>
  );
}

function GoalView() {
  return (
    <>
      <div className="overlay hidden"></div>
      <div className="task hidden">
        <img
          src={
            "https://images.unsplash.com/photo-1707343848655-a196bfe88861?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
          }
          alt={"hjhjh"}
        />

        <div className="task-content">
          <h2>Nama Goal</h2>
          <p>Description</p>
          <ul>
            <Milestone milestone={"Step 1"} />
            <Milestone milestone={"Step 1"} />
            <Milestone milestone={"Step 1"} />
            <Milestone milestone={"Step 1"} />
          </ul>
          <Button className={"closeButton"}>X</Button>
        </div>
      </div>
    </>
  );
}

function Milestone({ milestone }) {
  return <li>{milestone}</li>;
}

function FormAddGoal() {
  return (
    <>
      <div className="overlay hidden"></div>
      <form className="form-add-goal hidden">
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

function FormAddTask() {
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

export default App;
