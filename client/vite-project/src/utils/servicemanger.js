const server_url = "http://localhost:3000/";

// const shortcuts = {};

// function registerShortcut(keyCombo, callback) {
//   shortcuts[keyCombo.toLowerCase()] = callback;
// }

// function handleKeyDown(e) {
//   const combo = [
//     e.altKey ? "alt" : "",
//     e.ctrlKey ? "ctrl" : "",
//     e.shiftKey ? "shift" : "",
//     e.metaKey ? "meta" : "",
//     e.key.toLowerCase()
//   ]
//     .filter(Boolean)
//     .join("+");

//   if (shortcuts[combo]) {
//     e.preventDefault();
//     shortcuts[combo](e);
//   }
// }

// if (typeof window !== "undefined") {
//   window.addEventListener("keydown", handleKeyDown);
// }

export  {server_url}; ;