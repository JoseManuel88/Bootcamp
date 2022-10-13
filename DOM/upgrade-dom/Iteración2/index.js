window.onload = function() {
    // 2.1 Inserta dinamicamente en un html un div vacio con javascript.
  let div = document.createElement("div");
  document.body.appendChild(div);
  // 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
  let p = document.createElement("p");
  div.appendChild(p);

  // 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
  for (let i = 0; i < 6; i++) {
    let p2 = document.createElement("p");
    div.appendChild(p2);
  }
  // 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
  let p3 = document.createElement("p");
  p3.textContent = "Soy dinamico!";
  document.body.appendChild(p3);

  // 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector(".fn-insert-here");
h2.textContent ="Wubba Lubba dub dub";
  // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
  const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let pelis = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
    let list = document.createElement("li");
    list.textContent = apps[i];
    pelis.appendChild(list);
}
document.body.appendChild(pelis);
  // 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
  let rem = document.querySelectorAll(".fn-remove-me"); 
  for (let i = 0; i < rem.length; i++) {
    rem[i].remove();
  }
  // 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
  // 	Recuerda que no solo puedes insertar elementos con .appendChild.
let p4 = document.createElement("p");
p4.textContent = 'Voy en medio!';
// document.body.appendChild(p4);
div = document.querySelectorAll('.fn-insert-here');
div[div.length-2].append(p4);
  // 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let p6 = document.querySelectorAll('.fn-insert-here');

for (let i = 0; i < p6.length; i++) {
  let p5 = document.createElement("p");
  p5.textContent = 'Voy dentro!';
  p6[i].appendChild(p5);
}

}

