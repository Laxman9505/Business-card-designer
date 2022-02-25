import React, { useRef, useEffect } from "react";
function useOutsideAlerter(ref, setIsEditMode, container) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !document.querySelector(".text-container").contains(event.target)
      ) {
        setIsEditMode(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.setIsEditMode, props.contentContainer);

  return (
    <div ref={wrapperRef} style={props.style}>
      {props.children}
    </div>
  );
}
