"use client";
import { useFormStatus, useFormState } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-violet-50 bg-violet-500 hover:bg-violet-600 px-4 py-2 uppercase font-bold mb-8"
      disabled={pending}
    >
      {pending ? "...wait" : "save"}
    </button>
  );
};

const EditForm = ({ contact }) => {
  const [message, formAction] = useFormState();

  const { name, phone } = contact.data;

  return (
    <form action={formAction}>
      <label htmlFor="contact-name" className="block text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="contact-name"
        name="name"
        className="form-input mb-4"
        defaultValue={name}
      />

      <label htmlFor="contact-number" className="block text-gray-700">
        Number
      </label>
      <input
        type="tel"
        id="contact-number"
        name="phone"
        className="mb-4"
        defaultValue={phone}
      />

      <div className="flex gap-3">
        <SubmitBtn />
      </div>
    </form>
  );
};
export default EditForm;
