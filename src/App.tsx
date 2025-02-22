import React, { useState } from "react";
import Hero from "./components/Hero";
import ReferModal from "./components/ReferModal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Hero openModal={openModal} />
      <ReferModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;
