import { atom, useAtom } from 'jotai';
import { getOriginalNode } from 'typescript';
import './App.css';

function App() {
  const textAtom = atom('hello');
  const textLenAtom = atom((get) => get(textAtom).length);
  const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

  const Input = () => {
    const [text, setText] = useAtom(textAtom);
    return <input value={text} onChange={(e) => setText(e.target.value)} />;
  };

  const CharCount = () => {
    const [len] = useAtom(textLenAtom);
    return <div>Length: {len}</div>;
  };

  const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom);
    return <div>Uppercase: {uppercase}</div>;
  };
  textAtom;

  return (
    <div className="App">
      <Input />
      <CharCount />
      <Uppercase />
    </div>
  );
}

export default App;
