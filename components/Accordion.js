import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
      }}
    >
      <button className="w-1/2 block mx-auto rounded-full bg-blue-400 hover:shadow-lg font-semibold text-lightGrey px-6 py-2 transition"
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", marginTop: "20px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}