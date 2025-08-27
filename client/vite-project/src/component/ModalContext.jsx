// import React, { createContext, useContext, useState } from "react";

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   // keep track of all modals
//   const [modals, setModals] = useState({
//     updateProduct: false,
//     newProduct: false,
//     dealerForm: false,
//   });

//   // function to open/close any modal
//   const setModal = (name, value) => {
//     setModals((prev) => ({ ...prev, [name]: value }));
//   };

//   // function to close all modals at once
//   const closeAll = () => {
//     setModals({
//       updateProduct: false,
//       newProduct: false,
//       dealerForm: false,
//     });
//   };

//   return (
//     <ModalContext.Provider value={{ modals, setModal, closeAll }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => useContext(ModalContext);
