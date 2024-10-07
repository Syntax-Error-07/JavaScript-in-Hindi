/*DOM navigation in JavaScript is the process of moving through the elements and nodes of a webpage's Document Object Model (DOM) to access, and manipulate elements dynamically.
Key Points
1. Child Elements: Use `children`, `firstElementChild`, `lastElementChild`.
2. Parent Elements: Access with `parentElement`.
3. Sibling Elements: Use `nextElementSibling`, `previousElementSibling`.
4. All Nodes: Use `childNodes`, `firstChild`, `lastChild`*/


const items = document.querySelectorAll("ul")

items.forEach(first =>{
    const firstChild = first.firstElementChild;
    firstChild.style.color = "red";
})

items.forEach(last =>{
    const lastChild = last.lastElementChild;
    lastChild.style.color = "blue";
})

const mid = document.getElementById("apple")

const midChild = mid.previousElementSibling;
midChild.style.backgroundColor = "Yellow"