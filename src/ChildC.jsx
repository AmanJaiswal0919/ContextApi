import { useContext } from "react";
import  MyContext  from "./Context";
function ChildC() {
    const { text, setText } = useContext(MyContext)
    return (
      <>
        <button
          onClick={function () {
            setText("hello");
          }}
        >
          Click
        </button>
        <h1>{text}</h1>
      </>
    );
}
export default ChildC