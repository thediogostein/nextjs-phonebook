import Link from "next/link";
import DeleteBtn from "./DeleteBtn";

const ContactItem = async ({ id, name, phone }) => {
  return (
    <li className="flex gap-4 bg-violet-100 text-violet-950 p-4">
      <span>{name}</span>
      <span>{phone}</span>
      <Link href={`${id}`}>Edit</Link>
      <DeleteBtn id={id} />
    </li>
  );
};
export default ContactItem;
