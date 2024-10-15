import Link from 'next/link';

export default function Services() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold text-center mb-12 text-black">Our Services</h1>
      <p className="text-xl text-center mb-16 text-gray-600">
        At Hook, we’re not just developers—we’re your tech partners, dedicated to delivering solutions that are fast, reliable, and scalable. Our focus is on helping you build the technology that drives your business forward. Here's how we do it:
      </p>
      
      <section className="service-details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Mobile App Development */}
        <div className="service-card bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
          <h2 className="text-3xl font-bold mb-4 text-black">Mobile App Development</h2>
          <p className="text-lg text-gray-600 mb-6">
            Building a mobile app doesn’t need to be a complex, drawn-out process. We use **React Native** to build high-performance apps that work on both iOS and Android, without the need for separate codebases.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Whether you need an eCommerce app, a social media platform, or a booking system (like our **PawBooking** project), we make the process simple. From idea to execution, we’ll deliver your MVP in record time—usually in as little as 4-6 weeks.
          </p>
        </div>
        
        {/* Web Development */}
        <div className="service-card bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
          <h2 className="text-3xl font-bold mb-4 text-black">Web Development</h2>
          <p className="text-lg text-gray-600 mb-6">
            A fast, modern, and responsive website is crucial for success in today’s world. We specialize in **React** and **Next.js** to build scalable, high-performance websites that not only look great but also provide a seamless experience for your users.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our web development process is clear-cut and transparent. We’ll start by identifying your needs, design wireframes and prototypes, then move quickly into development. Our agile approach allows us to adjust and iterate based on your feedback, ensuring a smooth launch.
          </p>
        </div>
        
        {/* Backend & Database Solutions */}
        <div className="service-card bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
          <h2 className="text-3xl font-bold mb-4 text-black">Backend & Database Solutions</h2>
          <p className="text-lg text-gray-600 mb-6">
            No application is complete without a solid, reliable backend. Using **Node.js** and **MongoDB**, we create scalable backend systems that can handle thousands of users and large datasets, all while maintaining top-notch performance.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Security, performance, and scalability are our priorities. Whether you’re building a real-time app or a robust database solution, we ensure everything is optimized for your needs.
          </p>
        </div>
      </section>
      
      <section className="mvp-process py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Our MVP Development Process</h2>
        <p className="text-lg text-center mb-12 text-gray-600">
          At Hook, we believe in getting your product to market quickly, with minimal risk. Our MVP (Minimum Viable Product) process is designed to deliver a functional, scalable product in just 4-6 weeks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="mvp-step bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-black mb-4">Step 1: Discovery & Planning</h3>
            <p className="text-gray-600">
              We start with a discovery session to understand your goals, target audience, and core features. We’ll define the scope and create a roadmap for your MVP.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="mvp-step bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-black mb-4">Step 2: Design & Prototyping</h3>
            <p className="text-gray-600">
              Next, we design wireframes and high-fidelity prototypes, giving you a clear vision of the product’s look and feel.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="mvp-step bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-black mb-4">Step 3: Development</h3>
            <p className="text-gray-600">
              Using the latest technologies (React, Node.js, MongoDB), we develop the core features quickly and efficiently, ensuring that everything is scalable from day one.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="mvp-step bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-black mb-4">Step 4: Testing & Launch</h3>
            <p className="text-gray-600">
              Once development is complete, we conduct thorough testing to ensure everything works perfectly. Then, we launch your MVP and provide ongoing support as needed.
            </p>
          </div>
        </div>
      </section>
      
      <Link href="/">
        <span className="text-primary hover:underline mt-12 block text-center font-semibold text-lg">Back to Home</span>
      </Link>
    </div>
  );
}
