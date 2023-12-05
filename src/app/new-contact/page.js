import NewContactForm from "@/components/NewContactForm";
import Link from "next/link";

const NewContact = () => {
  return (
    <main>
      <div className="container">
        <Link href="/" className="block mb-5 underline">
          Return
        </Link>
        <NewContactForm />
      </div>
    </main>
  );
};
export default NewContact;
