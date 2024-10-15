import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hook - Bringing Your Ideas to Life</title>
        <meta name="description" content="Mobile and web development solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section */}
      <section className="hero bg-black text-white text-center py-20 opacity-0 animate-fadeIn">
        <div className="container mx-auto">
          <h1 className="text-6xl font-bold mb-6">Bringing Your Ideas to Life with Technology</h1>
          <p className="text-2xl text-gray-400 mb-10">
            Expert mobile app and web development that transforms your business.
          </p>
          <div className="space-x-4">
            <Link href="/quote">
              <span className="bg-primary text-black px-6 py-3 rounded-full hover:bg-yellow-500 font-semibold transform transition-transform duration-300 hover:scale-105">
                Get span Quote
              </span>
            </Link>
            <Link href="/services">
              <span className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-black font-semibold transform transition-transform duration-300 hover:scale-105">
                Our Services
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Let's Hook the Life Section */}
      <section className="hook-life bg-primary text-black text-center py-20 opacity-0 animate-fadeIn delay-300">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-6">Let's Hook the Life</h2>
          <p className="text-xl mb-8">At Hook, we're not just building apps; we're shaping the future with technology. Join us in transforming ideas into reality and creating meaningful digital experiences. It's time to hook the life!</p>
          <Link href="/services">
            <span className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 font-semibold transform transition-transform duration-300 hover:scale-105">
              Discover Our Services
            </span>
          </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features py-20 bg-white text-black opacity-0 animate-fadeIn delay-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Hook?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="feature-item transition-opacity duration-500 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Fast MVP Delivery</h3>
              <p className="text-gray-600">We specialize in delivering MVPs quickly, so you can test your ideas and launch in as little as 4-6 weeks.</p>
            </div>
            <div className="feature-item transition-opacity duration-500 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">Our apps are built to grow with your business, ensuring performance and scalability from day one.</p>
            </div>
            <div className="feature-item transition-opacity duration-500 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Client-Focused Approach</h3>
              <p className="text-gray-600">We work closely with you throughout the development process to ensure that your vision comes to life.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="projects py-20 bg-gray-100 text-black opacity-0 animate-fadeIn delay-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="project-card bg-white p-8 shadow-lg rounded-lg border-l-4 border-primary hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">PawBooking</h3>
              <p className="text-gray-600">
                A platform connecting pet owners with trusted pet hotels and services, built with React Native and Node.js.
              </p>
              <Link href="/projects/pawbooking">
                <span className="text-primary hover:underline mt-4 block">Learn More</span>
              </Link>
            </div>
            
            <div className="project-card bg-white p-8 shadow-lg rounded-lg border-l-4 border-primary hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Custom eCommerce Solution</h3>
              <p className="text-gray-600">
                A fully customized eCommerce platform for span global retailer, featuring Next.js and MongoDB for scalable performance.
              </p>
              <Link href="/projects/ecommerce">
                <span className="text-primary hover:underline mt-4 block">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
