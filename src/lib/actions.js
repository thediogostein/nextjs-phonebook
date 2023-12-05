"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import supabase from "./supabaseClient";

const DB_NAME = "Phonebook";

export const getAllContacts = async () => {
  const { data, error } = await supabase //
    .from(DB_NAME)
    .select();

  return { data, error };
};

export const getContact = async (id) => {
  const { data, error } = await supabase //
    .from(DB_NAME)
    .select()
    .eq("id", id)
    .single();
  return { data, error };
};

export const addContact = async (prevState, formData) => {
  const name = formData.get("name");
  const phone = formData.get("phone");

  const { data, error } = await supabase //
    .from(DB_NAME)
    .insert({ name, phone })
    .select();

  if (data) {
    redirect("/");
    return "success";
  }

  if (error) {
    return "error";
  }
};

export const deleteContact = async (prevState, formData) => {
  const id = formData.get("id");

  const { error } = await supabase //
    .from(DB_NAME)
    .delete()
    .eq("id", id);

  if (!error) {
    revalidatePath("/");
    return "success";
  }
  if (error) {
    return "error";
  }
};

export const editContact = async (prevState, formData) => {
  console.log("edited");
};
