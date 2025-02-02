import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const images = [
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
    "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
  ];

  return (
    <>
      <Slider {...settings} className="carousel-container">
        {images.map((src, index) => (
          <div key={index} className="px-2 py-2">
            <img
              src={src}
              alt={`carousel-image-${index}`}
              className="rounded-lg shadow-xl"
            />
          </div>
        ))}
      </Slider>

      {/* family */}
      <section className="bg-gradient-to-r from-pink-300 via-yellow-300 to-red-400 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <img
                src="https://png.pngtree.com/recommend-works/png-clipart/20241220/ourmid/pngtree-cartoon-cute-3d-red-envelope-2025-lunar-year-of-the-snake-png-image_14724627.png"
                alt="logo"
                className="w-14 h-14 mr-4"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6 text-center transform transition-transform duration-300 hover:scale-105">
              Chúc gia đình em một năm mới tràn đầy niềm vui, sức khỏe và hạnh
              phúc!
            </h1>
            <p className="text-white text-lg mb-8 text-center transform transition-transform duration-300 hover:scale-105">
              Anh chúc gia đình em luôn luôn đầm ấm, yêu thương nhau thật nhiều và
              luôn gặp được những điều tốt đẹp trong cuộc sống. Mong rằng năm
              mới này, mỗi thành viên trong gia đình sẽ có thật nhiều niềm vui,
              sức khỏe dồi dào và mọi ước mơ đều trở thành hiện thực. Chúc cho
              tình yêu thương và sự đoàn kết luôn là ngọn lửa sưởi ấm gia đình,
              giúp mọi người vượt qua mọi thử thách và cùng nhau xây dựng một
              tương lai tươi sáng hơn!
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn.pixabay.com/animation/2022/10/12/08/36/08-36-48-71_512.gif"
              alt="gifpHAOHoa"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* grandma */}

      <section className="bg-gradient-to-r from-pink-300 via-yellow-300 to-red-400 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <img
                src="https://png.pngtree.com/recommend-works/png-clipart/20241220/ourmid/pngtree-cartoon-cute-3d-red-envelope-2025-lunar-year-of-the-snake-png-image_14724627.png"
                alt="logo"
                className="w-14 h-14 mr-4"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6 text-center transform transition-transform duration-300 hover:scale-105">
              Chúc em một năm mới tràn đầy niềm vui, hạnh phúc và thịnh vượng!
            </h1>
            <p className="text-white text-lg mb-8 text-center transform transition-transform duration-300 hover:scale-105">
              Anh chúc em trong năm mới sẽ luôn gặp nhiều may mắn, sức khỏe dồi
              dào và những thành công rực rỡ. Mong rằng mỗi ngày mới sẽ mang đến
              cho em những khoảnh khắc ngọt ngào, bình an và hạnh phúc. Hãy luôn
              giữ nụ cười tươi tắn trên môi, vì em xứng đáng nhận được tất cả
              những điều tuyệt vời nhất mà cuộc sống này có thể mang lại. Mỗi
              bước đi của em sẽ luôn được che chở bởi tình yêu thương và sự ấm
              áp. Chúc em đạt được mọi mục tiêu và ước mơ trong năm mới này!
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn.pixabay.com/animation/2022/10/12/08/36/08-36-48-71_512.gif"
              alt="gifpHAOHoa"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Thanh */}

      <section className="bg-gradient-to-r from-pink-300 via-yellow-300 to-red-400 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <img
                src="https://png.pngtree.com/recommend-works/png-clipart/20241220/ourmid/pngtree-cartoon-cute-3d-red-envelope-2025-lunar-year-of-the-snake-png-image_14724627.png"
                alt="logo"
                className="w-14 h-14 mr-4"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6 text-center transform transition-transform duration-300 hover:scale-105">
              Chúc em một năm mới tràn đầy niềm vui, hạnh phúc và thịnh vượng!
            </h1>
            <p className="text-white text-lg mb-8 text-center transform transition-transform duration-300 hover:scale-105">
              Anh chúc em trong năm mới sẽ luôn gặp nhiều may mắn, sức khỏe dồi
              dào và những thành công rực rỡ. Mong rằng mỗi ngày mới sẽ mang đến
              cho em những khoảnh khắc ngọt ngào, bình an và hạnh phúc. Hãy luôn
              giữ nụ cười tươi tắn trên môi, vì em xứng đáng nhận được tất cả
              những điều tuyệt vời nhất mà cuộc sống này có thể mang lại. Mỗi
              bước đi của em sẽ luôn được che chở bởi tình yêu thương và sự ấm
              áp. Chúc em đạt được mọi mục tiêu và ước mơ trong năm mới này!
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn.pixabay.com/animation/2022/10/12/08/36/08-36-48-71_512.gif"
              alt="gifpHAOHoa"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
