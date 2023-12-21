import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full rounded-box">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
