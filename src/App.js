import React, { useState } from "react";
import DraggableModal from "./DraggableModal";

function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const openModal1 = () => {
    setShowModal1(true);
  };

  const openModal2 = () => {
    setShowModal2(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const openModal3 = () => {
    setShowModal3(true);
  };

  const closeModal3 = () => {
    setShowModal3(false);
  };

  return (
    <div className="App">
      <div className="btn-layout">
        <button className="open-btn" onClick={openModal1}>
          Otvoriť modálne okno 1
        </button>
        <button className="open-btn" onClick={openModal2}>
          Otvoriť modálne okno 2
        </button>
        <button className="open-btn" onClick={openModal3}>
          Otvoriť modálne okno 3
        </button>
      </div>

      {showModal1 && (
        <DraggableModal
          show={showModal1}
          onHide={closeModal1}
          title="Modálne okno 1"
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        />
      )}

      {showModal2 && (
        <DraggableModal
          show={showModal2}
          onHide={closeModal2}
          title="Modálne okno 2"
          url="https://picsum.photos/200"
        />
      )}

      {showModal3 && (
        <DraggableModal
          show={showModal3}
          onHide={closeModal3}
          title="Modálne okno 3"
          url="https://finstat.sk/53373049"
        />
      )}
    </div>
  );
}

export default App;
