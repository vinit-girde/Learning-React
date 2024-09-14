import { useCallback, useState, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  // States for storing input field values
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharAllowed, setIsSpecialCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  // Function to copy generated password in clipboard when clicked on copy
  const copyToClipboard = useCallback(() => {
    // To highlight selected the copied text from input text
    passwordRef.current?.select();
    // For highlighting specific character range passed as parameter
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Function to generate password and store in state
  const generatePassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // If number checkbox is checked
    if (isNumberAllowed) string += "0123456789";
    // if special character chjeckbox checked
    if (isSpecialCharAllowed) string += "!@#$%^&*-_+=[]{}~`";

    // Loop to generate random combination of password
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [setPassword, isNumberAllowed, isSpecialCharAllowed, length]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isSpecialCharAllowed, generatePassword]);

  // TODO: Add more classes to make it responsive
  return (
    <div className="h-screen bg-slate-950 flex items-center">
      <div className="bg-gray-700 w-1/2 m-auto rounded-lg p-4">
        <h2 className="text-white text-center text-3xl mb-2">
          Password Generator
        </h2>
        <div className="flex flex-wrap mb-2">
          <input
            type="text"
            className="xs:w-full md:w-4/6 lg:w-5/6 p-2 rounded-lg outline-none xs:w-1/2"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="lg:w-1/6 xs:w-full md:2/6 bg-blue-600 text-white rounded-lg outline-none shrink-0 cursor-pointer hover:bg-blue-500"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center">
          <div className="w-2/3">
            <input
              type="range"
              value={length}
              min={0}
              max={22}
              className="w-4/6 cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white pl-2">Length : {length}</label>
          </div>
          <div className="w-1/3">
            <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              id="number-box"
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number-box" className="text-white pl-2">
              Numbers{" "}
            </label>
          </div>
          <div className="w-1/3">
            <input
              type="checkbox"
              id="special-character"
              defaultChecked={isSpecialCharAllowed}
              onChange={() => setIsSpecialCharAllowed((prev) => !prev)}
            />
            <label htmlFor="special-character" className="text-white pl-2">
              Special Characters{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
