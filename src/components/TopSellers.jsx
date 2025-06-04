
import Slider from 'react-slick'

const topsellers=[
 {
    id: 1,
    title: "Gaming Mouse",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1661276503896-aa8b017f8914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW91ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Bluetooth Speaker",
    price: "$59.99",
    image: "https://media.istockphoto.com/id/1305942215/photo/mini-bluetooth-red-speaker-isolated-on-blue-background-with-shadows.webp?a=1&b=1&s=612x612&w=0&k=20&c=RcBwmgOs_5XsaI09OIeHQ88ZpVjfsfUhcujQKtpIswA=",
  },
  {
    id: 3,
    title: "Smartphone Stand",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1604665382258-875fc7b2bd63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0JTIwcGhvbmUlMjBzdGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Laptop Bag",
    price: "$39.99",
    image: "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwYmFnc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    price: "$99.99",
    image: "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
  },
]


const TopSellers = () => {
    const settings={
        dots:false,
        Infinite:true,
        speed:700,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
         
        responsive:[
             {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
        ]
    }
  return (
   <section className='py-10 px-4 sm:px-8 lg-px-16 bg-white'>
<h2 className='text-3xl font-bold text-center mb-6 text-gray-600'>Top Sellers</h2>
<Slider {...settings}>
{topsellers.map((product)=>(
<div key={product.id} className='px-3'>
    <div className='bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition'>
 <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
 <div className='p-4'>
     <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
 </div>
    </div>

</div>
))}
</Slider>
   </section>
  )
}

export default TopSellers