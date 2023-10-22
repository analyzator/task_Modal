// import React, { useRef, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "./Draggable.css";

// function Draggable({ url }) {
//   const draggableRef = useRef(null);
//   const [imageUrl, setImageUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   let isDragging = false;
//   let offsetX, offsetY;

//   useEffect(() => {
//     async function fetchImage() {
//       try {
//         const response = await fetch(url);
//         const blob = await response.blob();
//         const objectURL = URL.createObjectURL(blob);
//         setImageUrl(objectURL);
//       } catch (error) {
//         console.error("Ошибка при загрузке изображения:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchImage();
//   }, [url]);
//   const handleMouseDown = (e) => {
//     isDragging = true;
//     offsetX = e.clientX - draggableRef.current.getBoundingClientRect().left;
//     offsetY = e.clientY - draggableRef.current.getBoundingClientRect().top;
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const currentX = e.clientX - offsetX;
//       const currentY = e.clientY - offsetY;
//       draggableRef.current.style.left = `${currentX}px`;
//       draggableRef.current.style.top = `${currentY}px`;
//     }
//   };

//   const handleMouseUp = () => {
//     isDragging = false;
//   };

//   return (
//     <div
//       className="draggable modal"
//       ref={draggableRef}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       {isLoading ? (
//         <p>Загрузка...</p>
//       ) : (
//         <img src={imageUrl} alt="Изображение" />
//       )}
//     </div>
//   );
// }

// Draggable.propTypes = {
//   url: PropTypes.string.isRequired,
// };

// export default Draggable;
