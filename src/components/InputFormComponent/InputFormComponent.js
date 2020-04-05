import React from 'react';
import './InputFormComponent.scss';
import LoanContext from '../../contexts/LoanContext';

/**
 * InputFormComponent component
 * @constructor
 */
export default function InputFormComponent()  {
  const [amount, setAmount] = React.useState();
  const [duration, setDuration] = React.useState();
  const loanContext = React.useContext(LoanContext);

  /**
   * Submit event handler
   * @param {Event} event 
   */
  function onSubmit (event) {
    let apiUrl = new URL('http://localhost:2000/lenderBalanceDetails');
    
    apiUrl.search = new URLSearchParams({
      'amount': amount,
      'duration': duration
    });

    event.preventDefault();
    loanContext.setUserLoanData(apiUrl);
  }

    return (
      <form onSubmit={onSubmit} className="input-form">
        <div className="input-container">
          <label htmlFor="amount">Amount: </label>
          <input 
            type="number" 
            id="amount" 
            min="10000"
            max="100000"
            placeholder="0"
            onChange={e => {setAmount(e.target.value)}} 
            value={amount} 
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="duration">Duration: </label>
          <input 
            type="number" 
            id="duration"
            min="1"
            max="5"
            placeholder="0"
            onChange={e => {setDuration(e.target.value)}} 
            value={duration} 
            required
          />
        </div>
        <div className="input-container">
          <button type="submit" id="btnSubmit">Ok</button>
        </div>
      </form>
    );
}