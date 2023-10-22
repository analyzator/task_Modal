// import React from "react";
// import PropTypes from "prop-types";
// import "./Modal.css";

// const Modal = ({ show, onHide, title, children }) => {
//   if (!show) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header" onMouseDown={(e) => e.stopPropagation()}>
//           <h5 className="modal-title">{title}</h5>
//           <button className="close" onClick={onHide}>
//             <span>&times;</span>
//           </button>
//         </div>
//         <div className="modal-content">{children}</div>
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   onHide: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Modal;
