

const Featuresproduct = () => {
    const featuredProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1704440278730-b420f5892700?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1696688713460-de12ac76ebc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaGVzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Sneakers",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Leather Backpack",
    price: "$55.50",
    image: "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhY2twYWNrfGVufDB8fDB8fHww",
  },
];
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Featured Products
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {featuredProducts.map((product)=>(
            <div key={product.id} className='bg-white p-4 rounded-xl shadow hover:shadow-lg transition'>
         <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
             <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.price}</p>
            </div>

        ))}

      </div>

    </section>
  )
}

export default Featuresproduct