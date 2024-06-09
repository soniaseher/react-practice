import { useState, useCallback, useEffect, useRef } from "react"

const PasswordGenerator = () => {
  const [length, setLength]  = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "{[(&%$#@*^~+-/}])=`";

    for(let i = 1; i<= length; i++) {
      let char = Math.floor (Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);
 
  useEffect(() => {
      passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

// copy passowrd on clipboard function
  const copyPassClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
}, [password])


  return (
     <>
     
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-8 bg-gray-50"> 
       <h1 className="text-gray-900 text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type = "text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref = {passwordRef}
            />
            <button className="px-4 py-0.5 shrink-0 bg-blue-700 text-white outline-none" onClick={copyPassClip}>Copy</button>
        </div>
        <div className="text-sm flex gap-x-2">
            <div className="flex item-center gap-x-1">
              <input type="range" min={8} max={16} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
              <label> Length : {length}</label>
              <input type="checkbox" defaultChecked={numberAllowed} id = "numberInput" onChange={() => {setNumberAllowed((prev) => !prev)}}/>
              <label> Numbers</label>
              <input type="checkbox" defaultChecked={charAllowed} id = "charInput" onChange={() => {setCharAllowed((prev) => !prev)}}/>
              <label> Character</label>
            </div>
        </div>
       </div>
     </>
  )
}

export default PasswordGenerator