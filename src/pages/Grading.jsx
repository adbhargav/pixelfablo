import React, { useRef, useState } from "react";

export default function Grading() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState("");
  const [preset, setPreset] = useState("");

  function handleUploadClick() {
    fileInputRef.current.click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !selectedFile) {
      alert("Please fill in the email and upload your graded image.");
      return;
    }

    alert(
      `Submitted:\nEmail: ${email}\nPreset: ${preset}\nFile: ${selectedFile.name}`
    );
    // TODO: Add upload logic here
  }

  return (
    <div className="min-h-screen w-full bg-black text-white pt-24 pb-16 flex flex-col items-center px-4">
      {/* ---- Description / Context ---- */}
      <div className="max-w-md mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Submit Your Graded Work</h1>
        <p className="text-gray-400 leading-relaxed">
          Already used one of our presets on your image? Upload your professionally graded
          result below for a chance to be featured on our official platforms.
        </p>
      </div>

      {/* ---- Original Form size/styling kept ---- */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Upload Graded Image</h2>

        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Preset used (optional)"
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none"
          value={preset}
          onChange={(e) => setPreset(e.target.value)}
        />

        <div
          onClick={handleUploadClick}
          className="cursor-pointer border-2 border-dashed border-gray-600 p-6 rounded-lg text-center hover:border-gray-400 transition"
        >
          <h3 className="text-lg font-semibold">Upload Image</h3>
          <p className="text-sm text-gray-400">Click to select your graded file</p>
          <div className="mt-4">
            <button
              type="button"
              className="bg-gray-700 px-4 py-1 text-white text-sm rounded hover:bg-gray-600"
            >
              Choose File
            </button>
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <div className="text-green-400 font-medium text-sm text-center">
            Selected: {selectedFile.name}
          </div>
        )}

        <button
          type="submit"
          className="mt-2 bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}