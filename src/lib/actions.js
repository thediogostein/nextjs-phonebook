"use server";

import { revalidatePath } from "next/cache";
import supabase from "./supabaseClient";

export const getAllContacts = async () => {
  const { data, error } = await supabase //
    .from("Phonebook")
    .select();

  return { data, error };
};

export const addContact = async (prevState, formData) => {
  const name = formData.get("name");
  const phone = formData.get("phone");

  const { data, error } = await supabase //
    .from("Phonebook")
    .insert({ name, phone });

  if (!error) {
    return "added";
  }

  if (error) {
    return "error";
  }
};
