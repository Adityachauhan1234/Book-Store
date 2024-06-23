import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-8 mt-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold mb-4 ">About Us </h1>
          <p className="text-lg">
            Welcome to our bookstore! We are dedicated to providing quality
            books and excellent service to our customers. We are committed to
            offering a diverse selection of books, catering to every reader's
            taste and interest. Our bookstore is more than just a place to buy
            books; it's a community hub where readers can connect, share, and
            immerse themselves in the world of literature.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Curate a Diverse Selection: Offer a wide range of books from
              various genres, authors, and publishers to ensure that every
              reader can find something they love.
            </li>
            <li>
              Promote Literacy: Support literacy initiatives and encourage
              reading habits among all age groups through community programs and
              events.
            </li>
            <li>
              Provide Exceptional Service: Deliver a warm, welcoming, and
              knowledgeable customer experience to help readers discover new and
              exciting books.
            </li>
            <li>
              Support Local Authors: Champion local talent by featuring books
              from local authors and providing a platform for their work.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Inspire Lifelong Readers: Cultivate a passion for reading that
              stays with our customers throughout their lives.
            </li>
            <li>
              Build a Literary Community: Create a space where readers can
              connect, discuss, and share their love for books through events,
              book clubs, and author signings.
            </li>
            <li>
              Embrace Innovation: Stay ahead of trends in the book industry by
              adopting new technologies and approaches to enhance the reader's
              experience.
            </li>
            <li>
              Champion Inclusivity: Ensure our collection reflects diverse
              voices and perspectives, making our bookstore a welcoming place
              for everyone.
            </li>
          </ul>
          <p className="mt-4">
            Thank you for being part of our journey. Whether you're a lifelong
            book lover or a new reader, we're here to help you explore the
            endless possibilities that books have to offer. Happy reading!
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
