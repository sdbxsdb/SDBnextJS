import Accordion from "../components/Accordion";


const Card = (props) => {
  return ( 
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16  shadow-xl rounded-lg bg-lightGrey  text-darkGrey transition">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2 text-darkGrey flex flex-col items-center">
        <h2 className="font-semibold">{props.title}</h2>
        <div>
          <p className="">{props.subtitle}</p>
        </div>
      </div>
  
      <div className="p-4 border-t mx-8 mt-2">
        
        <Accordion className="w-1/2 block mx-auto rounded-full text-lightGrey hover:shadow-lg font-semibold px-6 py-2" title="Click Me!" content={props.content} />

      </div>
    </div>
  );
}

export default Card;