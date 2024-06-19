import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return {
    isOpen,
    toggle
  };
};

export const FormDataModal = () => {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>Abrir</button>

      {isOpen && (
        <div>
          <h2>Dados pessoais</h2>
        </div>
      )}
    </>
  );
};
