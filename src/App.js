import React, { useState } from 'react';
import'./App.css'

function Calculator() {
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState('');
  const [prevValue, setPrevValue] = useState('');

  const handleNumberClick = (value) => {
    if (value === '.') {
      
      if (input.includes('.')) return;
    }
    if (input === '0' && value !== '.') {
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleOperatorClick = (op) => {
    if (op === '-' && operator && input === '') {
      setInput('-');
      return;
    }
    if (operator && input === '' && op !== '-') {
      setOperator(op); 
      return;
    }
    if (operator && input !== '') {
      setPrevValue(evaluate(prevValue, operator, input));
    } else if (input !== '') {
      setPrevValue(input);
    }
    setOperator(op);
    setInput('');
  };
  

  const handleEqualClick = () => {
    if (operator) {
      setInput(evaluate(prevValue, operator, input));
      setPrevValue('');
      setOperator('');
    }
  };

  const handleClearClick = () => {
    setInput('0');
    setPrevValue('');
    setOperator('');
  };

  const evaluate = (prev, op, current) => {
    const num1 = parseFloat(prev);
    const num2 = parseFloat(current);
    
    
    if (isNaN(num1) || isNaN(num2)) return 'NaN';
  
    switch (op) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        return num2 !== 0 ? (num1 / num2).toString() : 'NaN'; 
      default:
        return current;
    }
  };

  return (
    <div className="calculator">
      <div id="display">{input}</div>
      <button id="clear" onClick={handleClearClick}>AC</button>
      <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
      <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
      <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
      <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
      <button id="equals" onClick={handleEqualClick}>=</button>
      <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
      <button id="one" onClick={() => handleNumberClick('1')}>1</button>
      <button id="two" onClick={() => handleNumberClick('2')}>2</button>
      <button id="three" onClick={() => handleNumberClick('3')}>3</button>
      <button id="four" onClick={() => handleNumberClick('4')}>4</button>
      <button id="five" onClick={() => handleNumberClick('5')}>5</button>
      <button id="six" onClick={() => handleNumberClick('6')}>6</button>
      <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
      <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
      <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
      <button id="decimal" onClick={() => handleNumberClick('.')}>.</button>
    </div>
  );
}

export default Calculator;
