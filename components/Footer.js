const Footer = () => {
  return ( 
    <div className="py-6 flex justify-center items-center dark:bg-darkGray dark:text-lightGrey bg-lightGrey text-darkGrey transition">
      <small>Copyright &copy; SDB {new Date().getFullYear()}</small>
    </div>
  );
}

export default Footer;