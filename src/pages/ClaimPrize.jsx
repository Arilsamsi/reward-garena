import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ClaimPrize() {
  const [gameId, setGameId] = useState("");
  const [selectedPrize, setSelectedPrize] = useState("");
  const navigate = useNavigate();

  const prizes = [
    { id: "diamonds", name: "Diamond Bundle", value: "1000 Diamonds" },
    {
      id: "character",
      name: "Character Skin",
      value: "Legendary Character Skin",
    },
    { id: "weapon", name: "Weapon Bundle", value: "Rare Weapon Skins" },
  ];

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gameId || !selectedPrize) {
      toast.error("Please fill in all fields");
      return;
    }

    // Store claim in localStorage
    const claims = JSON.parse(localStorage.getItem("claims") || "[]");
    const currentUser = localStorage.getItem("currentUser");
    claims.push({
      gameId,
      prizeId: selectedPrize,
      user: currentUser,
      date: new Date().toISOString(),
    });
    localStorage.setItem("claims", JSON.stringify(claims));

    toast.success("Prize claim submitted! Please wait for processing.");
    setGameId("");
    setSelectedPrize("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500">
            Klaim Hadiah Kamu
          </h1>
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 text-white px-1 py-1 rounded"
          >
            Log Out
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">ID Free Fire</label>
              <input
                type="text"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
                placeholder="Enter your Game ID"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Pilih Hadiah</label>
              <select
                value={selectedPrize}
                onChange={(e) => setSelectedPrize(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
                required
              >
                <option value="">Select a prize</option>
                {prizes.map((prize) => (
                  <option key={prize.id} value={prize.id}>
                    {prize.name} - {prize.value}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded transition duration-300"
            >
              Claim Prize
            </button>
          </form>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">
            Important Notes:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Pastikan ID Game Anda benar sebelum mengirimkan</li>
            <li>Pengiriman hadiah dapat memakan waktu hingga 24 jam</li>
            <li>Setiap akun hanya dapat mengklaim satu hadiah sekali</li>
            <li>Jaga keamanan informasi akun Anda</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClaimPrize;
