/* Du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */

/*Opgave 1: Skriv en validering af svar i koden herunder. Resultatet skal vises i myAnswerFeedbackElement når bruger trykker på myAnswerButton.
Der er et korrekt svar:
nej 
*/

const myAnswerInput = document.getElementById('answerOne');
const myAnswerButton = document.getElementById('answerButton');
const myAnswerFeedbackElement = document.getElementById('answerFeedback');

// myAnsverButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   /* Din kode her. Skriv en alert der skriver "du har svaret rigtigt" hvis svaret er true
//   og "du har svaret forkert" hvis svaret er false*/
//   let myAnswer = myAnsverInput.value;

//   let correct = 'nej';

//   if (myAnswer === correct) {
//     alert('Du har svaret rigtigt');
//   } else {
//     alert('Du har svaret forkert');
//   }

//   console.log('Answer is: ' + myAnswer);
// });

/*Opgave 2: Udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/

myAnswerButton.addEventListener('click', (e) => {
  e.preventDefault();

  const myAnswer = myAnswerInput.value;

  switch (myAnswer) {
    case 'nej':
      alert('Du har svaret rigtigt');
      myAnswerFeedbackElement.innerHTML = 'Korrekt';
      break;
    case 'ja i disney film':
      alert('Du har svaret rigtigt');
      myAnswerFeedbackElement.innerHTML = 'Korrekt, din lille Disney Adult';
      break;
    case 'ja':
      alert('Du har svaret forkert!');
      myAnswerFeedbackElement.innerHTML = 'Forkert, din idiot!';
      break;
    default:
      myAnswerFeedbackElement.innerHTML = "Wait, that's illegal!";
      break;
  }

  // if (myAnswer == 'nej' || myAnswer == 'ja i disney film') {
  //   alert('Du har svaret rigtigt');
  //   myAnswerFeedbackElement.innerHTML = 'Korrekt';
  // } else {
  //   alert('Du har svaret forkert');
  //   myAnswerFeedbackElement.innerHTML = 'Forkert, idiot';
  // }
});

/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .length til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/

/* helper functions*/
const navn = document.getElementById('myName');
const age = document.getElementById('myAge');
function validateName() {
  let nameLength = navn.value;

  if (nameLength.length > 3) {
    navn.style.border = '3px solid green';
  } else {
    navn.style.border = 'revert';
  }

  return nameLength.length > 3;
}

function validateAge() {
  const ageValue = age.value;

  return ageValue > 12;
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

navn.addEventListener('keyup', validateName);
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const mail = document.getElementById('myEmail');
  const valid = document.getElementById('formValideringResult');
  if (validateName && validateAge && validateEmail(mail.value)) {
    valid.innerHTML = 'Form accepted!';
  } else {
    valid.innerHTML = 'Form NOT accepted!';
  }
});
/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
