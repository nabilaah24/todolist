// todo 1:
// - membuat aplikasi todo list

// stack:
// - bebas, boleh vanilla atau framework (vanilla prefered)

// nilai plus:
// - validasi todo name tidak boleh sama dgn
// yg sudah diinput (+10)
// - validasi input harus diisi (+10)
// - pesan error ketika validasi tidak pass (+10)
// - clear input setelah klik button (+10)
// - good design (css) (+1 up to +10)

import "./App.scss";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
