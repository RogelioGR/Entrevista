import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Button } from 'react-bootstrap';
import MReservar from './Components/Modals';
import { ModalsUsers } from './ModalsUsers';


function App() {
const [modalType, setModalType] = useState<ModalsUsers>(ModalsUsers.NONE);

  const handleOpenModal = (type: ModalsUsers) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(ModalsUsers.NONE);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <Button variant="danger" onClick={() => handleOpenModal(ModalsUsers.MODAL_V)}>
          Abrir modal
        </Button>
       
      </div>

      <MReservar
        show={modalType === ModalsUsers.MODAL_V}
        handleClose={handleCloseModal}
      />
    </>
  );
}

export default App;
