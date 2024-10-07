//DOM Element Selectors are methods provided by JavaScript to target and interact with elements in an HTML document. These methods allow you to find elements based on their ID, class, tag, or CSS selectors, enabling dynamic manipulation of the webpage.

/*  1.getElementById(id)
    2.getElementsByClassName(className)
    3.getElementsByTagName(tagName)
    4.querySelector(selector)
    5.querySelectorAll(selector)*/

    const header = document.getElementById("header");
    header.textContent="Welcome to syntax Error"
    console.log(header.textContent)

    const para = document.getElementsByClassName("para");
    console.log(para[0].textContent)
    console.log(para[1].textContent)

    const div = document.getElementsByTagName("div")
    console.log(div.length)

    const firstPara = document.querySelector("p")
    console.log(firstPara.textContent)

    const All = document.querySelectorAll("p")
    console.log(All.length)