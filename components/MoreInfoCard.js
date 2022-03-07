import Modal from "../components/Modal";
import { useState } from "react";


const MoreInfoCard = (props) => {

const [showModal, setShowModal] = useState(false);


  return ( 
    
      <>
  
      <div className="">

      <div className="flex justify-center">
        <button className="hover:text-blue-400 transition underline" onClick={() => setShowModal(true)} >
          More Info
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} title={props.title}>
        <div className="w-full flex justify-center font-semibold mb-4 text-3xl">
          <h1>{props.title}</h1>
        </div>
          <div className="pb-[40px]" dangerouslySetInnerHTML={{
          __html: props.content
        }}></div>
      </Modal>
        
        
      </div>
      </>

    
  );
  
}

export default MoreInfoCard;