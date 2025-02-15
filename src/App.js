import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";
import "@fontsource/pacifico";

export default function App() {
  const [hearts, setHearts] = useState([]);

  const addHeart = (event) => {
    const newHeart = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
    };
    setHearts([...hearts, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-pink-100 p-4 text-center relative overflow-hidden"
      onClick={addHeart}
    >
      <motion.h1
        className="text-5xl font-extrabold text-pink-600 drop-shadow-lg font-[Pacifico]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Chúc mừng lễ tốt nghiệp!
      </motion.h1>

      <motion.div
        className="mt-4 text-lg text-gray-700 space-y-2 max-w-lg bg-white p-4 rounded-2xl shadow-lg font-[Pacifico]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>🌸 Hôm nay là một ngày đặc biệt, ngày bạn chính thức tốt nghiệp! Mình không thể đến tận nơi, nhưng mình luôn dõi theo và chúc bạn thật nhiều niềm vui! 💖</p>
        <p>🎓 Bạn đã cố gắng rất nhiều và đạt được thành tựu tuyệt vời này. Hãy tận hưởng khoảnh khắc đáng nhớ này vì bạn xứng đáng! ✨</p>
        <p>💡 Chặng đường phía trước còn nhiều thử thách, nhưng mình tin rằng với sự thông minh và chăm chỉ của bạn, bạn sẽ luôn tỏa sáng! 🌟</p>
        <p>💖 Dù ở đâu, hãy luôn giữ nụ cười trên môi, vì bạn thật tuyệt vời! Chúc bạn có một tương lai rực rỡ! 🚀</p>
      </motion.div>

      <motion.div
        className="mt-4 w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-pink-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg" alt="Ảnh của bạn ấy" className="w-full h-full object-cover" />
      </motion.div>

      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ y: -150, opacity: 0, scale: 1.5 }}
          transition={{ duration: 2 }}
          className="absolute text-pink-500"
          style={{ top: heart.y, left: heart.x }}
        >
          <FaHeart size={24} />
        </motion.div>
      ))}

      <motion.button
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-bold relative overflow-hidden font-[Pacifico]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Bạn là người tuyệt vời nhất! ❤️
      </motion.button>

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        >
          <FaStar size={14} />
        </motion.div>
      ))}
    </div>
  );
}
