let menu = ""
const vacancies = []

do{
  menu = prompt(`Job Vacancy System
  
  Choose one of the operations below.
  1 - Available vacancies list
  2 - Create a new vacancy
  3 - View a vacancy
  4 - Register a candidate
  5 - Delete a vacancy
  6 - Exit`)

  switch (menu) {
    case "1":
    function list() {  
    for (let i = 0; i < vacancies.length; i++) {
      alert(`Vacancy information
  
  Vacancy nº ${Number([i]) + 1}
  Vacancy name: ${vacancies[i].name}
  Number of registered candidates: ${vacancies[i].candidates.length}`)
      }
    }
    list()
    break

    case "2":
      let vacancy = {}
      let candidates = []
      vacancy.candidates = candidates
      vacancy.name = prompt(`Enter the vacancy name:`)
      vacancy.description = prompt(`Enter the vacancy description:`)
      vacancy.deadline = prompt(`Enter the application deadline (dd-mm--yyyy):`)
      const verifyVacancy = confirm(`Please, verify if the vacancy informations below are correct and click on confirm.
      
      Name: ${vacancy.name}
      Description: ${vacancy.description}
      Deadline: ${vacancy.deadline}`)

      if (verifyVacancy) {
        vacancies.push(vacancy)
        console.log(vacancies)
        alert(`Vacancy created`)
      } else{
        alert(`Returning to the menu...`)
      }
    break

    case "3":
      let vacancyIndex = Number(prompt(`Enter the vacancy index to consult it:`))
      let vacancyIndexNumber = vacancyIndex - 1
      if (vacancyIndexNumber >= vacancies.length || vacancyIndexNumber < 0) {
        alert(`Invalid index`)
      } else {
      let candidatessName = ""
      function candidatesName () {
        for (let ind = 0; ind < vacancies[vacancyIndexNumber].candidates.length; ind++) {
          candidatessName += "\n - " + vacancies[vacancyIndexNumber].candidates[ind]
        }
        return candidatessName
      }
      candidatesName ()
      alert(`Vacancy information

  Vacancy nº ${vacancyIndex}
  Vacancy name: ${vacancies[vacancyIndexNumber].name}
  Vacancy description: ${vacancies[vacancyIndexNumber].description}
  Vacancy deadline: ${vacancies[vacancyIndexNumber].deadline}
  Number of registered candidates: ${vacancies[vacancyIndexNumber].candidates.length}
  Candidates' name: ${candidatessName}`)
}
    break

    case "4":
      let candidate = prompt(`What is the candidate's name?`)
      let index = Number(prompt(`What is the vacancy index would you like to apply?`))
      let indexNumber = index - 1

      let verifyApplication = confirm(`${candidate}, do you confirm your application?
      
      Vacancy information

      Vacancy nº ${index}
      Vacancy name: ${vacancies[indexNumber].name}
      Vacancy description: ${vacancies[indexNumber].description}
      Vacancy deadline: ${vacancies[indexNumber].deadline}`)

      if (verifyApplication) {
        alert(`Successful application! Returning to the menu...`)
        vacancies[indexNumber].candidates.push(candidate)
      } else {
        alert(`Returning to the menu...`)
      }
    break

    case "5":
      let position = prompt(`What is the index of the vacancy to be removed?`)
      let positionNumber = Number(position) - 1
      let verifyRemoval = confirm(`Please, verify if this is indeed the vacancy you wish to remove.
      

      Vacancy information

      Vacancy nº ${position}
      Vacancy name: ${vacancies[positionNumber].name}
      Vacancy description: ${vacancies[positionNumber].description}
      Vacancy deadline: ${vacancies[positionNumber].deadline}`)

      if (verifyRemoval) {
        vacancies.splice(positionNumber, 1)
        alert(`Vacancy removed`)
      } else{
        alert(`Returning to the menu...`)
      }
    break

    case "6":
      alert(`Leaving the application...`)
    break

    default:
      alert(`Invalid option!`)
    break
  }
} while (menu !== "6")