'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus, Lock, ArrowRight } from "lucide-react"; // Importing icons from lucide-react

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800">

      {/* Navigation Bar */}
      <header className="bg-white shadow-md py-4 fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-800">
            <Link href="/">
              <h2 className="text-2xl font-semibold">CloudAuth</h2>
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="/signup">
              <Button className="px-6 py-2 text-lg rounded-2xl shadow-md">Sign Up</Button>
            </Link>
            <Link href="/signin">
              <Button variant="outline" className="px-6 py-2 text-lg rounded-2xl border-2">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-10 items-center mt-24">
        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
           Cloud-Based User Authentication with Django Rest API
          </h1>
          <p className="text-xl mb-6">
          Built and deployed a basic authentication system on the cloud using Django REST Framework.
           The system allows users to register, log in, and log out using token-based authentication. 
           Implemented input validation and handled common user errors, laying the groundwork for more 
           advanced security features in future versions.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>⚡ Fast User Authentication</li>
              <li>📊 Real-Time Analytics and Reporting</li>
              <li>🔒 Built with Django RestAPI</li>
            </ul>
          </div>

          <div className="flex gap-6">
            <Link href="/signup">
              <Button className="px-6 py-3 text-lg rounded-2xl shadow-lg">Get Started Free</Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/cloudimage.jpg"
            alt="Cloud Auth Illustration"
            width={500}
            height={500}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Glassmorphism Effect Section */}
      <section className="relative bg-gradient-to-br from-teal-400 to-blue-600 p-16 mb-16 rounded-xl backdrop-blur-md bg-opacity-30">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-lg mb-6">
            Get started with our secure authentication platform and elevate the security of your applications effortlessly.
            Start integrating with our easy-to-use APIs and enjoy powerful features designed to enhance user experience.
          </p>

          <div className="flex justify-center gap-6">
            <Link href="/signup">
              <Button className="px-6 py-3 text-lg rounded-2xl bg-white hover:bg-slate-200 text-gray-800">Sign Up Now</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="px-6 py-3 text-lg text-black rounded-2xl border-white">Login</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 border-t">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-semibold mb-6">
                    Why Choose CloudAuth for Your Application?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    CloudAuth provides top-notch security and seamless onboarding, all backed by Django. Our solution reduces development time while boosting user conversion rates. Here’s why it's the best choice for your app:
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-2">🚀 Integrated using React</h3>
                        <p className="text-gray-600">
                            Easily integrate Backend with the frontend Using React Next.js Framework to test our Cloud Based Authentication Project
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">⚡ Lightning Fast</h3>
                        <p className="text-gray-600">
                            Our Django Authentication system us speed, authentication requests are handled in milliseconds.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">🧩 Customized UI of Nextjs</h3>
                        <p className="text-gray-600">
                            Customize every aspect of the authentication flow, including login forms, user registration, and email templates.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">🛡️ Route Protection</h3>
                        <p className="text-gray-600">
                            Prevents unauthorized access through URL manipulation using secure route protection mechanisms.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">✅ Input Validation</h3>
                        <p className="text-gray-600">
                            Includes built-in input validation and basic error handling to ensure only clean and valid data is processed.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">🎉 Toasty Notifications</h3>
                        <p className="text-gray-600">
                            Integrated Toasty for real-time feedback and alerts, improving the user experience and interactivity of your app.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
