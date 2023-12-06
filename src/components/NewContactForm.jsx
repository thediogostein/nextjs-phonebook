"use client";

import Link from "next/link";
import { addContact } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-violet-50 bg-violet-500 hover:bg-violet-600 px-4 py-2 uppercase font-bold mb-8"
      disabled={pending}
    >
      {pending ? "...wait" : "add"}
    </button>
  );
};

const NewContactForm = () => {
  const [state, formAction] = useFormState(addContact, null);
  const formRef = useRef(null);

  useEffect(() => {
    if (state === "error") {
      toast.error("there was an error");
      return;
    }

    if (state === "success") {
      toast.success("contact added");
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formAction(formData);
        formRef.current?.reset();
      }}
    >
      <label htmlFor="contact-name" className="block text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="contact-name"
        name="name"
        className="form-input mb-4"
      />

      <label htmlFor="contact-number" className="block text-gray-700">
        Number
      </label>
      <input type="tel" id="contact-number" name="phone" className="mb-4" />

      <div className="flex gap-3">
        <SubmitBtn />
      </div>
    </form>
  );
};
export default NewContactForm;
