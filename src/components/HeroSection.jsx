
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Discover Premium Fashion',
    description: 'Trendy collections at amazing prices.',
    buttonText: 'Explore Now',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/6956803/pexels-photo-6956803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Latest Tech Essentials',
    description: 'Grab top gadgets at best prices.',
    buttonText: 'Shop Electronics',
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/346751/pexels-photo-346751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Easy Online Shopping',
    description: 'Delivered fast and free to your door.',
    buttonText: 'Start Shopping',
  },
];

export default function HeroSection() {
  return (
    // Added padding-top for navbar height (h-14 = 56px) with some buffer (pt-16)
    <div className="relative w-full h-screen overflow-x-hidden pt-14">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Optional overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-10  max-w-[100vw] overflow-hidden">
                <h2 className="text-2xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-sm md:text-lg mb-6 max-w-xl">{slide.description}</p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
  );
}
