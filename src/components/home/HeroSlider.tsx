import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e',
    title: 'Premium Pet Food',
    description: 'Nutritious meals for your furry friends',
    cta: 'Shop Now',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1447684808650-354ae64db5b8',
    title: 'Healthcare Essentials',
    description: 'Keep your pets healthy and happy',
    cta: 'Explore',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97',
    title: 'Pet Accessories',
    description: 'Everything your pet needs',
    cta: 'View Collection',
  },
];

export function HeroSlider() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}