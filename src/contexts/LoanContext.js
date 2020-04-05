import React, {useState} from "react";

const LoanContext = React.createContext(null);
export const LoanConsumer = LoanContext.Consumer;

export function LoanProvider({children}) {
    const [loanData, setLoanData] = useState ({
        "amount": 0,
        "duration": 0,
        "monthlyInstallment": 0
    });

    /**
     * Gets Loan Data from server and sets to state
     * @param {*} url 
     */
    async function setUserLoanData (url) {
          const response = await fetch(url);
          const jsonData = await response.json();
          setLoanData(jsonData);
      };

    const loanContextValue = {
        setUserLoanData,
        loanData    
    }

    return (
        <LoanContext.Provider value={loanContextValue}>
			{children}
		</LoanContext.Provider>
    );
}

export default LoanContext;