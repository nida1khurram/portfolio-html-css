"use client"
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function ContactPage() {
  return (
    <>
    <section>
        <h1 id="contact-h1">Contact Me</h1>
        <form action="contact">
            <div className="form-text">
            <label htmlFor="name"aria-placeholder="Your Name">Your Name : </label>
            <input type="text" name="name" />
            </div>

            <div className="form-text">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
            </div>

            <div className="form-text">
            <label htmlFor="message">Message :</label>
            <textarea name="message" id="message" rows={8}></textarea>
            </div>

            <div className="form-text">

                <div className="icon">
                    {/* gmail */}
                    <Link target="_blank" href={"/"} >
                    <IoIosMail />
                </Link>
                {/* fb */}
                <Link target="_blank" href={"/"} >
                  <FaFacebookF  />
                </Link>
            {/* twi */}
            <Link target="_blank" href={"/"} className="text-gray-500">
                  <FaTwitter className="text-2xl hover:text-blue-500" />
                </Link>
                 {/* link */}
                 <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/nida-khurram/"}
                  className="text-gray-500"
                >
                  <FaLinkedinIn className="text-2xl hover:text-blue-500" />
                </Link>
                </div>

               
            </div>
        </form>
        <div id="submit-btn">
        <Link href={'/'} className="btn" >
        Submit
        </Link>
        </div>
      </section>
    </>
  )
} 
       
