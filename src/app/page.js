'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/blogs/')
      .then(res => res.json())
      .then(data => setBlogs(data.blogs));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-amber-900 via-black to-amber-800 text-amber-100 font-sans">
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/60 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-tight text-white">
            CloudAuth
          </Link>
          <div className="flex gap-4">
            <Link href="/signup">
              <Button className="rounded-full px-5 py-2 text-base bg-amber-600 hover:bg-amber-500 text-white">Sign Up</Button>
            </Link>
            <Link href="/signin">
              <Button variant="outline" className="rounded-full px-5 py-2 text-base border-amber-400 text-amber-300 hover:border-white">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full pt-36 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Cloud-Based User Authentication with Django Rest API
            </h1>
            <p className="text-lg mb-6 text-amber-300">
              Built and deployed a basic authentication system on the cloud using Django REST Framework...
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-white">Key Features:</h3>
              <ul className="space-y-2 text-base text-amber-300 pl-5 list-disc">
                <li>⚡ Fast User Authentication</li>
                <li>📊 Real-Time Analytics and Reporting</li>
                <li>🔒 Built with Django RestAPI</li>
              </ul>
            </div>
            <Link href="/signup">
              <Button className="rounded-full px-6 py-3 text-lg bg-amber-600 hover:bg-amber-500 text-white shadow-md">
                Get Started Free
              </Button>
            </Link>
          </div>

          <div className="relative w-full h-[400px] md:h-[480px] flex justify-center items-center">
            <Image alt='Our cloud Image display here' className='rounded-xl' src={'/cloudimage.jpg'} width={500} height={500}/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-amber-700 to-amber-900 py-20 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-lg mb-8 text-amber-200">
            Get started with our secure authentication platform...
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/signup">
              <Button className="rounded-full px-6 py-3 text-lg bg-white text-amber-800 hover:bg-amber-200">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="rounded-full px-6 py-3 text-lg text-white border-white hover:bg-white hover:text-amber-700">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-amber-900 py-20 border-t border-amber-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose CloudAuth?</h2>
            <p className="text-amber-300 text-lg">
              CloudAuth provides top-notch security...
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🚀 Integrated using React",
                desc: "Easily integrate Backend with the frontend Using React Next.js Framework"
              },
              {
                title: "⚡ Lightning Fast",
                desc: "Our Django Authentication system is fast..."
              },
              {
                title: "🧩 Customized UI",
                desc: "Customize every aspect of the authentication flow..."
              },
              {
                title: "🛡️ Route Protection",
                desc: "Prevents unauthorized access through secure route protection."
              },
              {
                title: "✅ Input Validation",
                desc: "Includes built-in input validation and error handling."
              },
              {
                title: "🎉 Toasty Notifications",
                desc: "Real-time feedback via toast messages."
              }
            ].map((item, index) => (
              <div key={index} className="bg-amber-800 p-6 rounded-xl shadow-md hover:shadow-lg transition border border-amber-700">
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-amber-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Blog Section */}
      <section className="bg-amber-950 py-20 border-t border-amber-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">📚 Personalized News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <div key={blog.id} className="bg-amber-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 cursor-pointer border border-amber-700">
                <h2 className="text-xl font-semibold text-amber-400 mb-2">{blog.title}</h2>
                <p className="text-amber-300 text-sm line-clamp-4">{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
