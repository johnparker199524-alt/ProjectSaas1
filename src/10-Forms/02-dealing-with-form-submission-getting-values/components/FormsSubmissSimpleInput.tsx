import React,{ useRef, useState } from 'react';

const FormsSubmissSimpleInput:React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event:React.FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  const formSubmissionHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(enteredName);

    const enteredValue = nameInputRef.current!.value;
    console.log(enteredValue);

    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormsSubmissSimpleInput;
