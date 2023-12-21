"use client";
import { createTaskCustom } from "@/utils/actions";
// import { useFormStatus } from "react-dom";
import { useFormState } from "@/utils/actions"; // Import the missing useFormState function
import { useEffect } from "react";
import { toast } from "react-toastify";

// const SubmitBtn = () => {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       type="submit"
//       className="btn btn-primary join-item"
//       disabled={pending}
//     >
//       {pending ? "please wait..." : "Create Task"}
//     </button>
//   );
// };

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.errror("There was an error creating the task. Please try again.");
      return;
    }
    if (state.message === "success") {
      toast.success("Task created successfully!");
      return;
    }
  }, [state]);

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}

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
