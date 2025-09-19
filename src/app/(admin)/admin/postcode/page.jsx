"use client";
import { useEffect, useState } from "react";
import { Pencil,Trash } from "lucide-react";

export default function PostcodePage() {
  const [postcodes, setPostcodes] = useState([]);
  const [newPostcode, setNewPostcode] = useState("");
  const [editId, setEditId] = useState(null);
  const [editCode, setEditCode] = useState("");

  // Fetch all postcodes
  const fetchPostcodes = async () => {
    const res = await fetch("/api/form/postcode");
    const data = await res.json();
    setPostcodes(data);
  };

  useEffect(() => {
    fetchPostcodes();
  }, []);

  // Create
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newPostcode) return;

    await fetch("/api/form/postcode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postcode: newPostcode }),
    });

    setNewPostcode("");
    fetchPostcodes();
  };

  // Update
  const handleUpdate = async (id) => {
    await fetch(`/api/form/postcode/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postcode: editCode }),
    });

    setEditId(null);
    setEditCode("");
    fetchPostcodes();
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this postcode?")) return;
    await fetch(`/api/form/postcode/${id}`, { method: "DELETE" });
    fetchPostcodes();
  };

  const handleBulkUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  await fetch("/api/form/postcode/bulk", {
    method: "POST",
    body: formData,
  });

  fetchPostcodes();
};

  return (
    <section className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Postcode Management</h1>
    
   <form onSubmit={handleCreate} className="mb-6 flex gap-2 items-center">
  {/* Single Add */}
  <input
    type="text"
    placeholder="Enter postcode"
    value={newPostcode}
    onChange={(e) => setNewPostcode(e.target.value)}
    className="w-64 rounded border p-2"
  />
  <button
    type="submit"
    className="rounded bg-primary px-4 py-2 text-white"
  >
    Add
  </button>

  {/* Bulk Import */}
  <input
    id="bulkFile"
    type="file"
    accept=".xlsx, .xls, .csv"
    onChange={handleBulkUpload}
    className="hidden"
  />
  <label
    htmlFor="bulkFile"
    className="cursor-pointer rounded bg-black-4 text-white-1 px-4 py-2 text-white hover:bg-black-4"
  >
    Import Bulk
  </label>
</form>



      {/* Postcode table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">#</th>
            <th className="border p-2">Postcode</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {postcodes.map((pc, idx) => (
            <tr key={pc._id} className="border">
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">
                {editId === pc._id ? (
                  <input
                    type="text"
                    value={editCode}
                    onChange={(e) => setEditCode(e.target.value)}
                    className="rounded border p-1"
                  />
                ) : (
                  pc.postcode
                )}
              </td>
              <td className="space-x-2 border p-2">
                {editId === pc._id ? (
                  <>
                    <button
                      onClick={() => handleUpdate(pc._id)}
                      className="text-white rounded bg-green-600 px-2 py-1"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditCode("");
                      }}
                      className="text-white rounded bg-gray-400 px-2 py-1"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditId(pc._id);
                        setEditCode(pc.postcode);
                      }}
                      className="text-blue-500 hover:text-blue-400 px-2 py-1"
                    >
                       <Pencil />
                    </button>
                    <button
                      onClick={() => handleDelete(pc._id)}
                      className="text-white rounded bg-red-600 text-white-1 px-2 py-1"
                    >
                     <Trash />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}

          {postcodes.length === 0 && (
            <tr>
              <td colSpan="3" className="p-4 text-center text-gray-500">
                No postcodes found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
