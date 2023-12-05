import { getAllContacts } from "@/lib/actions";
import ContactItem from "./ContactItem";

const ContactList = async () => {
  const { data, error } = await getAllContacts();

  if (error) {
    return <p>Could not fetch contact list</p>;
  }

  return (
    <ul className="flex flex-col gap-4 ">
      {data.map((item) => (
        <ContactItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default ContactList;
