
const testimonials = [
  {
    id: 1,
    name: 'Aarav Patel',
    feedback: 'Amazing quality and fast delivery. Will definitely shop again!',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Divya Sharma',
    feedback: 'User-friendly website and excellent customer support.',
    role: 'Marketing Manager',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Karan Mehta',
    feedback: 'The products are top-notch! Very happy with the service.',
    role: 'Entrepreneur',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];
const Testimonals = () => {
  return (
     <section className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{item.feedback}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonals