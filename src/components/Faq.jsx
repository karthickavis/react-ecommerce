import  { useState } from 'react';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. Products must be unused and in original condition.",
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery usually takes 3–5 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping charges may apply.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, we’ll send you a tracking link via email or SMS.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 text-left text-lg font-medium text-gray-800 hover:bg-gray-200 transition"
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
