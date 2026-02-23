import { useState } from "react";

interface TasksProps {
  index: number;
  title: string;
  description: string;
}

function Task({ index, title, description }: TasksProps) {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <label className="peer">
        <input
          type="checkbox"
          name={"task" + index}
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
        />
        {title}
        <br />
        {description}
      </label>
    </>
  );
}

export default Task;
