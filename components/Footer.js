const Footer = () => {
  return ( 
    <div className="py-6 flex flex-col justify-center items-center dark:bg-darkGrey dark:text-lightGrey bg-lightGrey text-darkGrey transition">
      <div>
        <small> SDB | {new Date().getFullYear()}</small>
      </div>
      <div>
        <small><a href="mailto:samdonaghybell@gmail.com?subject=hi!" target="_blank" rel="noopener noreferrer">samdonaghybell@gmail.com</a>  |  <a href="tel:00447780586444">004477 805 86 444</a></small>
        
      </div>
    </div>
  );
}

export default Footer;