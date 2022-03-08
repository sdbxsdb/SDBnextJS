import { useState } from "react";
import Link from "next/link";


const Projects = () => {
  return (
    <>
      <div>
      <div className="w-full text-center">
        <h1 className="text-4xl font-semibold mb-12">Projects</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col items-start gap-y-12">

            <div className="border-b-2 dark:border-lightGrey border-darkGrey flex justify-start w-full transition group">
              <Link href={'/projects/cinecopters'}>
                <a className="flex items-center w-full justify-start group">
                  <p className="group-hover:text-blue-400 transition transform group-hover:translate-x-4">CineCopters - (Broucher & Order Reqests)</p>
                </a>
              </Link>
            </div>

            <div className="border-b-2 dark:border-lightGrey border-darkGrey flex justify-start w-full transition group">
              <Link href={'/projects/kidsGame'}>
                <a className="flex items-center w-full justify-start group">
                  <p className="group-hover:text-blue-400 transition transform group-hover:translate-x-4">McDonalds Farm - (Interactive Childrens Game)</p>
                </a>
              </Link>
            </div>
            
            <div className="border-b-2 dark:border-lightGrey border-darkGrey flex justify-start w-full transition group">
              <Link href={'/projects/smartMirror'}>
                <a className="flex items-center w-full justify-start group">
                  <p className="group-hover:text-blue-400 transition transform group-hover:translate-x-4">Smart Mirror - (Raspberry Pi Build)</p>
                </a>
              </Link>
            </div>

            <div className="border-b-2 dark:border-lightGrey border-darkGrey flex justify-start w-full transition group">
              <Link href={'/projects/jnrClothing'}>
                <a className="flex items-center w-full justify-start group">
                  <p className="group-hover:text-blue-400 transition transform group-hover:translate-x-4">JnR Clothing - (Retail)</p>
                </a>
              </Link>
            </div>

            <div className="border-b-2 dark:border-lightGrey border-darkGrey flex justify-start w-full transition group">
              <Link href={'/projects/ruralVoices'}>
                <a className="flex items-center w-full justify-start group">
                  <p className="group-hover:text-blue-400 transition transform group-hover:translate-x-4">Rural Voices - (Public Service Information)</p>
                </a>
              </Link>
            </div>
            

        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
