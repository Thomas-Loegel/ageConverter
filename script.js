function nbrSeconde(number){
   let calc = number*3154000700; // a voir encore
   let text = document.getElementById('result').textContent = calc
}

function nbrMinute(number){
   let calc = number*525600;
   let text = document.getElementById('result').textContent = calc
}

function nbrHeure(number){
   let calc = number*(24*365);
   let text = document.getElementById('result').textContent = calc
}

function nbrJour(number){
   let calc = number*365;
   let text = document.getElementById('result').textContent = calc
}

function convert(number){

   number = document.getElementById('age').value;

   let value = 0;

   for (i = 0; i < 4; i++) {

      if (document.forms.formulaire.choix[i].checked == true) {
         value = i+1;
      }
   }

   switch (value) {
      case 1:
         nbrSeconde(number);
      break;

      case 2:
         nbrMinute(number);
      break;

      case 3:
         nbrHeure(number);
      break;

      case 4:
         nbrJour(number);
      break;
   }
}
