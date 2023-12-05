import ContactList from "@/components/ContactsList";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Link
          href="/new-contact"
          className="mb-4 inline-block bg-violet-500 px-4 py-2 uppercase bold text-violet-50 hover:bg-violet-600"
        >
          Add new
        </Link>
        <ContactList />
      </div>
    </main>
  );
}
