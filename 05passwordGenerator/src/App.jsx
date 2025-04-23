import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // State variables
  const [length, setLength] = useState(8);                 // Default password length
  const [numberAllowed, setNumberallowed] = useState(false); // Include numbers toggle
  const [charAllowed, setCharallowed] = useState(false);     // Include special characters toggle
  const [password, setPassword] = useState("");              // Final password output

  // Ref for input field to copy password
  const passwordRef = useRef(null);

  // Password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Add number and special characters conditionally
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+[]{}`~";

    // Generate password based on selected length
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass); // Set final password
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();                        // Select input field
    passwordRef.current?.setSelectionRange(0, 999);       // Highlight text
    window.navigator.clipboard.writeText(password);       // Copy to clipboard
  }, [password]);

  // Regenerate password on change of options or length
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        {/* Password input and copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* Options Section */}
        <div className="flex text-sm gap-x-2">

          {/* Password Length Slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          {/* Number Option */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberallowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Special Characters Option */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharallowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
