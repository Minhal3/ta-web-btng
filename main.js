const elementNode = document.getElementById("judul");
const textNode = elementNode.textContent;
console.log(textNode);
console.log(elementNode.nodeType);

const elements = document.getElementsByClassName("p1")[0];
console.log(elements);

const elementQs = document.querySelector(".a p");
console.log(elementQs);

elementNode.innerHTML = "<em>Hallo Dinusian</em>";
