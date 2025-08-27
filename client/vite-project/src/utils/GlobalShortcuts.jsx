// import React, { useEffect } from "react";
// import { registerShortcut } from './servicemanger.js'  // shortcut handler (step 2)
// import shortcutsConfig from "./config.js"; // all combos defined
// import { useModal } from "../component/ModalContext.jsx";       // modal context

// const GlobalShortcuts = () => {
//   const { setModal, closeAll } = useModal();

//   useEffect(() => {
//     shortcutsConfig.forEach(({ combo, action }) => {
//       if (action === "closeAll") {
//         registerShortcut(combo, () => closeAll());
//       } else {
//         // here `action` is same as modal name
//         registerShortcut(combo, () => setModal(action, true));
//       }
//     });
//   }, []);

//   return null; // this component just listens, doesn’t render UI
// };

// export default GlobalShortcuts;
