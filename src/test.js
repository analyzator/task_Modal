import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./Draggable.css";

const Draggable = ({ children }) => {
  const draggableRef = useRef(null);

  const handleMouseDown = (e) => {
    const { current: draggable } = draggableRef;
    const initialX = e.clientX - draggable.getBoundingClientRect().left;
    const initialY = e.clientY - draggable.getBoundingClientRect().top;

    const handleMouseMove = (e) => {
      const newX = e.clientX - initialX;
      const newY = e.clientY - initialY;
      draggable.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="draggable" ref={draggableRef} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Draggable;
