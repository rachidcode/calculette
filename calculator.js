 const nbr = [{
         valeur: "(",
     },
     {
         valeur: ")",
     },
     {
         valeur: "%",
     },
     {
         valeur: "AC",
     },
     {
         valeur: 1,
     },
     {
         valeur: 2,
     },
     {
         valeur: 3,
     },
     {
         valeur: "+",
     },
     {
         valeur: 4,
     },
     {
         valeur: 5,
     },
     {
         valeur: 6,
     },
     {
         valeur: "-",
     },
     {
         valeur: 7,
     },
     {
         valeur: 8,
     },
     {
         valeur: 9,
     },
     {
         valeur: "*",
     },
     {
         valeur: ".",
     },
     {
         valeur: 0,
     },
     {
         valeur: "=",
     },
     {
         valeur: "/",
     },


 ]


//  const colors = ['red', 'blue', 'yellow', 'pink', 'lime']
//  document.body.addEventListener('keypress', function () {
//      const randomColor = Math.floor(Math.random() + color.length)
//      document.body.style.background = colors[randomColor]
//  })
 document.querySelector("main").innerHTML = ''
 


 const monContainer = document.querySelector("main");


 const calculette = document.createElement('div');
 calculette.className = "contenair";
 monContainer.appendChild(calculette);



 const affichage = document.createElement('div');
 affichage.className = "aff";
 calculette.appendChild(affichage);

 function safeEval(str) {
     return Function('return ' + str)()
 }

 for (let element of nbr) {
     const btn = document.createElement('button');
     btn.textContent = element.valeur;
     calculette.appendChild(btn);

     btn.addEventListener("click", function () {

         if (element.valeur == "AC") {
             affichage.textContent = "";


         } else if (element.valeur == "=") {
             let reponse = safeEval(affichage.textContent);
             affichage.textContent = reponse
            

         } else {
             affichage.textContent += element.valeur
         }

     })

 }