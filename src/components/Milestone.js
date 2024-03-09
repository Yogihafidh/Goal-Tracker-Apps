export default function Milestone({ milestone, onToggleItem, percentage }) {
  console.log(milestone.id);
  return (
    <li>
      <input
        type="checkbox"
        value={milestone.packed}
        onChange={() => onToggleItem(milestone.id, percentage)}
      />
      <span className={milestone.packed ? "line-throught" : ""}>
        {milestone.item}
      </span>
    </li>
  );
}
