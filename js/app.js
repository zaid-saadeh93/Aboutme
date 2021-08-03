'use strict';

alert("Welcom to me site");
let score =0;
score+=1;

let userName = prompt('please enter your name ');
console.log(userName);
if (userName == null){
    userName = userName.toLowerCase();
}

    switch (userName) {
        case 'yes':
            console.log('true answer');
            alert("true answer");
            score+=1;
            break;

        case 'no':
        console.log('false answer');
        alert("false answer");
        break;

        default:
        alert("inter yes or no");

    }
let age = prompt("is your age is 21?");

if(age !== null){
   age = age.toLowerCase();

}

    switch (age) {
        case 'yes':
            console.log('true answer');
            alert("true answer");
            score+=1;
            break;
        
            case 'no':
                console.log('false answer');
                alert("false answer");
                break;

         default:
         alert("inter yes or no");

    }



 let ask = prompt("is your ask is 21?");

    if(ask !== null){
       ask = ask.toLowerCase();
    
    }
    
        switch (ask) {
            case 'yes':
                console.log('true answer');
                alert("true answer");
                score+=1;
                break;
            
                case 'no':
                    console.log('false answer');
                    alert("false answer");
                    break;
    
             default:
             alert("inter yes or no");


        alert("let`s play together can you guess a number i choices it");
 let guessnumber = Number (prompt('guessnumper please : '));

            if (guessnumber === 13) {
                alert("That`s a true answer");
                console.log('That`s a true answer' + guessnumber);
                alert("true answer")
                score+=1;
                break;

            }else if (guessnumber > 13){
                alert("too low pro");
                alert("pick another number");


            }else if (guessnumber < 13){
                alert("too hight pro");
                alert("pick another number")
            }

        }
                alert("The true answer is 13")



let userName2 = prompt("your favorit sport is basketball");
if ( userName2 !== null){
    userName2 = userName2.toLowerCase();

}

    switch (userName) {
        case 'yes':
           console.log('true answer');
           alert("true answer");
           score+=1;
           break;

        case 'no':
            console.log('false answer');
            alert("false answer");
            break;

        default:
        alert("inter yes or no");

    }



let maqloba = prompt(" your favorit food is maqloba right?");
if ( maqloba !== null){
    maqloba = maqloba.toLowerCase();

}

    switch (maqloba) {
        case 'yes':
           console.log('true answer');
           alert("true answer");
           score+=1;
           break;

        case 'no':
            console.log('false answer');
            alert("false answer");
            break;

        default:
        alert("inter yes or no");

    }


let place = ['palstine','jordan','egypt','UAE','iraq','holand','span','italy'];
let travel = prompt("Which country do you want to visit?")

    for(let i = 0 ; i<6 ; i++){
        let travel = prompt("Which country do you want to visit?");

        let a;
    for(a = 0 ; a<place.length ; a++){

        if(travel === place[a]){
        alert('true answer');

        console.log('Thank you for visiting the site' + travel);
        score+=1
        break;
        }
    }
    }