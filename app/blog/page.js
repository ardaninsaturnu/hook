import Head from 'next/head';

export default function Blog() {
  return (
    <section className="blog py-20 text-center bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">Stay Ahead in the Tech World</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="blog-post bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Mastering React Native for Cross-Platform Apps</h3>
            <p className="text-gray-700 mb-6">
              Learn how to build high-performance mobile apps for both iOS and Android using React Native.
            </p>
            <a href="/blog/react-native" className="text-blue-500 hover:underline">Read More</a>
          </div>
        
          <div className="blog-post bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Supercharge Your Website with Next.js</h3>
            <p className="text-gray-700 mb-6">
              Discover the power of Next.js for building blazing-fast, scalable web applications.
            </p>
            <a href="/blog/nextjs" className="text-blue-500 hover:underline">Read More</a>
          </div>
        
          <div className="blog-post bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Managing Big Data with MongoDB</h3>
            <p className="text-gray-700 mb-6">
              Learn how MongoDB makes handling large datasets simple and efficient.
            </p>
            <a href="/blog/mongodb" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </section>
  
  );
}
