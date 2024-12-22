import Link from "next/link";

// Fetch data from the API
export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const response = await url.json();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Books List</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Available</th>
              <th className="border border-gray-300 p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {response.map((book: any, index: number) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">{book.id}</td>
                <td className="border border-gray-300 p-2">{book.name}</td>
                <td className="border border-gray-300 p-2 text-center">{book.type}</td>
                <td className="border border-gray-300 p-2 text-center">
                  {book.available ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <Link
                    href={`/${book.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
