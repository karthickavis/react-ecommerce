

const WhyShop = () => {
    const features=[
        {
            title: "Fast Delivery",
      desc: "Get your products delivered within 2-3 business days.",
      icon:"🚚",
        },
         {
      title: "Best Quality",
      desc: "We offer only top-rated and premium quality items.",
      icon: "✅",
    },
    {
      title: "Secure Payments",
      desc: "All transactions are encrypted and 100% secure.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      desc: "Our support team is available anytime you need help.",
      icon: "📞",
    },
    ]
  return (
    <section className='bg-white py-12 px-4 sm:px-8 lg:px-16'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800'>
            Why Shop With Us 
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      {features.map((item,index)=>(
    <div key={index} className='bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition duration-300'>
        <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
    </div>

      ))}
        </div>

    </section>
  )
}

export default WhyShop