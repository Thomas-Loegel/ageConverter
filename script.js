function nbrSeconde(number){
   let calc = number*31536000;
   document.getElementById('result').textContent = calc
}

function nbrMinute(number){
   let calc = number*525600;
   document.getElementById('result').textContent = calc
}

function nbrHeure(number){
   let calc = number*(24*365);
   document.getElementById('result').textContent = calc
}

function nbrJour(number){
   let calc = number*365;
   document.getElementById('result').textContent = calc
}

function convert(number){

   number = document.getElementById('age').value;

   for(i = 0; i < 4; i++){

      if(document.forms.form.choix[i].checked == true){
         value = i+1;
      }
   }

   switch (value){
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
