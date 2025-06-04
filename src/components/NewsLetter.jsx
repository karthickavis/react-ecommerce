

const NewsLetter = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 text-center">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
  <p className="text-gray-600 mb-6">Get updates on latest products and exclusive offers.</p>
  <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full sm:w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none"
    />
    <button
      type="submit"
      className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      Subscribe
    </button>
  </form>
</section>

  )
}

export default NewsLetter