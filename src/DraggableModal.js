import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./DraggableModal.css";

function DraggableModal({ show, onHide, title, url }) {
  const draggableRef = useRef(null);
  const [iframeUrl, setIframeUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let isDragging = false;
  let offsetX, offsetY;

  const handleMouseDown = (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableRef.current.getBoundingClientRect().left;
    offsetY = e.clientY - draggableRef.current.getBoundingClientRect().top;
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const currentX = e.clientX - offsetX;
      const currentY = e.clientY - offsetY;
      draggableRef.current.style.left = `${currentX}px`;
      draggableRef.current.style.top = `${currentY}px`;
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleClose = () => {
    onHide();
  };

  useEffect(() => {
    if (url) {
      setTimeout(() => {
        setIframeUrl(url);
        setIsLoading(false);
      }, 1000);
    }
  }, [url]);

  return (
    <div
      className={`draggable-modal ${show ? "show" : ""}`}
      ref={draggableRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="modal-header" onMouseDown={(e) => e.stopPropagation()}>
        <h5 className="modal-title">{title}</h5>
        <button className="close-btn" onClick={handleClose}>
          <span>&times;</span>
        </button>
      </div>
      <div className="modal-content">
        {isLoading ? (
          <p>Načítava sa...</p>
        ) : (
          <iframe
            title={title}
            src={iframeUrl}
            frameBorder="0"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
}

DraggableModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DraggableModal;
