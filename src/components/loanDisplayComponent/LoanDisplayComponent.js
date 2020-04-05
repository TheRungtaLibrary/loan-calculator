import React from 'react';
import './LoanDisplayComponent.scss';
import { LoanConsumer } from "../../contexts/LoanContext";

/**
 * Component to show installment amount
 * @constructor
 */
export default function LoanDisplayComponent() {
  return(
    <LoanConsumer>
      {({loanData}) =>
         <div className="loan-display">
           <div>
            <label>Monthly Installment: <b>{loanData && loanData.monthlyInstallment} &euro;</b></label>
           </div>
          </div>
      }
    </LoanConsumer>
  ) 
}
