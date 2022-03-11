import { useState, useEffect} from "react";
import  ReactDOM  from "react-dom";
import Link from "next/link";






export default function MobileNav({show, onClose}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }

  const mobileNavContent = show ? (

    <div className="fixed dark:bg-darkGrey bg-lightGrey flex top-0 left-0 w-screen h-scrren bottom-0 justify-center items-center transition z-50 dark:text-white text-darkGrey">

      <button onClick={handleClose} className="absolute top-5 right-5 text-4xl hover:text-blue-400 transition transform hover:transition hover:rotate-90">
        &#10005;
      </button>

      <div className="w-screen h-screen">
        <ul className="w-screen h-screen flex flex-col justify-between py-40 items-center text-3xl">
          <li onClick={handleClose}>
            <Link href="/about">
              <a  className="hover:text-blue-400 transition">Bio</a>
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/skills">
              <a className="hover:text-blue-400 transition">Skills</a>
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/projects">
              <a className="hover:text-blue-400 transition">Projects</a>
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/blogs">
              <a className="hover:text-blue-400 transition">Blog</a>
            </Link>
          </li>
          <li >
            <a href="mailto:samdonaghybell@gmail.com?subject=Howdy!" target="_blank" rel="noopener noreferrer">Get in touch</a>
          </li>
        </ul>
      </div>

    </div>

  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      mobileNavContent,
      document.getElementById("mobilenav-root")
    )
  } else {
    return null;
  }
}