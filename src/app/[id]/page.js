import EditForm from "@/components/EditForm";
import { getContact } from "@/lib/actions";
import Link from "next/link";

const EditContact = async ({ params }) => {
  const contact = await getContact(params.id);

  return (
    <main>
      <Link href="/" className="underline mb-5">
        back to all contacts
      </Link>
      <EditForm contact={contact} id={params.id} />
    </main>
  );
};
export default EditContact;
