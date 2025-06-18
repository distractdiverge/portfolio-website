'use client';

import Image from 'next/image';
import { useState, FormEvent } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.',
      });
      setIsSubmitting(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.',
      });
      setIsSubmitting(false);
      return;
    }

    // Create mailto link
    const subject = `Contact from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;

    // Open default email client
    window.location.href = `mailto:allie@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    setSubmitStatus({
      success: true,
      message: 'Thank you! Your message has been sent.',
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white px-5 py-10 text-gray-800 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                Get In Touch
              </h1>
              <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Have a project in mind or want to discuss potential
                opportunities? I&apos;d love to hear from you! Fill out the form
                below or reach out directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                ></textarea>
              </div>

              {submitStatus && (
                <div
                  className={`rounded-md p-4 ${submitStatus.success ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Connect with me
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/distractdiverge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025.8-.223 1.65-.334 2.5-.34.85.006 1.7.117 2.5.34 1.91-1.293 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.36.309.681.919.681 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.14 20.194 22 16.425 22 12.017 22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/allielapinski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                  aria-label="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:allie@example.com"
                  className="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                  aria-label="Email"
                >
                  <span className="sr-only">Email</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block">
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/assets/AllieLooktoFront.png"
                alt="Allie Lapinski"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
