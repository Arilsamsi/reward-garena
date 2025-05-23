import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-500">
            Free Fire Rewards
          </h1>
          <p className="text-xl text-gray-300">
            Claim exclusive in-game items and rewards!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Diamond Bundle",
              image:
                "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/241/2024/06/06/IMG_4480-3305617609.jpeg",
              description: "Get 1000 diamonds free!",
            },
            {
              title: "Character Skin",
              image:
                "https://mrwallpaper.com/images/hd/unleash-your-strength-with-free-fire-classic-alok-skin-character-hva8wh2ltejzw52b.jpg",
              description: "Exclusive legendary character skin",
            },
            {
              title: "Weapon Bundle",
              image: "https://img.youtube.com/vi/oM8IsHoHg9w/sddefault.jpg",
              description: "Rare weapon skins collection",
            },
          ].map((reward, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={reward.image}
                alt={reward.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-500">
                  {reward.title}
                </h3>
                <p className="text-gray-400 mb-4">{reward.description}</p>
                <Link
                  to="/login"
                  className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300"
                >
                  Claim Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
