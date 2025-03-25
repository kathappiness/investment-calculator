import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 11000,
    expectedReturn: 6,
    duration: 12,
  })

  const isValidInput = userInput.duration >= 1;

  function handleChange(inputName, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputName] : +newValue,
      }
    });
  }
  return (
    <>
      <Header title="React Investment Calculator" />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isValidInput && <p className="center">Please, enter a duration that is greater than 0!</p>}
      {isValidInput && <Results input={userInput} />}
    </>
  )
}

export default App