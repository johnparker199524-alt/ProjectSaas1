import React,{useState} from "react";

const TestUnitFirstTestGreeting = () => {
const [changeText,setText] = useState<boolean>(false)

const changeHandler = () =>{

  setText(true)
}

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <p>It's good to see you!</p>}
     {changeText &&<p>Changed</p>}

      <div><button type="button" onClick={changeHandler}>Button</button></div>
    </div>

   
  );
};

export default TestUnitFirstTestGreeting;
