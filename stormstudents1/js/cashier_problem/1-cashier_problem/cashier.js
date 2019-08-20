//cashier(price, paid, cid)
//cashier(50, 40, 60) -> expected output: "1 x €10 & cash left in drawer = €10". 

function cashier(price, paid, cid){
    let rest=paid-price;
   
   console.log(`the cash available in the drawer is 100 by  default `)
    let rest20=parseInt(rest/20); 
    let rest10=parseInt((rest-rest20*20)/10);
    let rest5=parseInt((rest-rest20*20-rest10*10)/5);
    let rest1=parseInt((rest-rest20*20-rest10*10-rest5*5)/1);
    let rest0=((rest-rest20*20-rest10*10-rest5*5-rest1*1));
    if(rest>=20){cid=cid+rest; return (`${rest20} X 20 € + ${rest10} X 10 € + ${rest5} X 5 €  + ${rest1} X 1 €  + ${rest0} X cent  &&  the cash available in the drawer is ${cid} `);  }
   else if(rest>=10){cid=cid+rest;return  (` ${rest10} X 10 € + ${rest5} X 5 €  + ${rest1} X 1 €  + ${rest0} X cent &&  the cash available in the drawer is ${cid}`); }
  else  if(rest>=5){cid=cid+rest;return  (` ${rest5} X 5 €  +  ${rest1} X 1 €  + ${rest0} X cent &&  the cash available in the drawer is ${cid}`); }
    else if(rest>=1){cid=cid+rest;return  (`  ${rest1} X 1 €  + ${rest0} X cent &&  the cash available in the drawer is ${cid}`); }
   else if((rest<1) && (rest >=0)){cid=cid+rest;return  (`  ${rest0} X cent &&  the cash available in the drawer is ${cid}`); }
   else {return (`we need more money`)}
   
  
  
}
console.log(cashier(50,50.47,100));
console.log(cashier(50,158,100));
console.log(cashier(50,60,100));
console.log(cashier(50,40,100));
