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
      valeur:6,
   },
   {
      valeur:"-",
   },
   {
      valeur:7,
   },
   {
      valeur:8,
   },
   {
      valeur:9,
   },
   {
      valeur:"*",
   },
   {
      valeur:".",
   },
   {
      valeur:0,
   },
   {
      valeur:"=",
   },
   {
      valeur:"/",
   },


]



document.querySelector("main").innerHTML = ''


const monContainer = document.querySelector("main");


const calculette = document.createElement('div');
calculette.className = "contenair";
monContainer.appendChild(calculette);

const resultat = document.createElement('div');
resultat.className = "output";
calculette.appendChild(resultat);

for (let element of nbr) {
   const btn = document.createElement('button');
   btn.textContent = element.valeur;
   calculette.appendChild(btn);

}
let n = document.getElementById
