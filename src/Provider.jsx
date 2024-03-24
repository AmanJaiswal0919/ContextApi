import {  useState } from "react";
import MyContext from "./Context";

  const ContextProvider = function ({ children }) {
  const [text, setText] = useState("");
  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider