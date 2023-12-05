"use client";
import { useFormState, useFormStatus } from "react-dom";
import { deleteContact } from "@/lib/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Deleting..." : "Delete"}</button>
  );
};

const DeleteBtn = ({ id }) => {
  const [message, formAction] = useFormState(deleteContact, null);

  useEffect(() => {
    if (message === "error") {
      toast.error("error, try again in a few seconds");
    }
    if (message === "success") {
      toast.success("deleted");
    }
  }, [message]);

  return (
    <form action={formAction}>
      <input type="hidden" value={id} name="id" />
      <SubmitBtn />
    </form>
  );
};
export default DeleteBtn;
