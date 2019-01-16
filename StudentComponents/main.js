// function element (...props) {
//   return `<${props[1]}` class =
// }

const h1 = (...props) => {
  return `<h1 class="${props[1]}">${props[0]}</h1>`
}

const section = (...props) => {
  return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
  return `<aside class="${props[1]}">${props[0]}</aside>`
}

for (student of students) {
  let studentComponent = ""
  if (student.score >= 60) {
    studentComponent =
      `
          <div id="student">
              ${h1(student.name, "xx-large passing")}
              ${section(student.class, "section-padded")}
              ${aside(student.info, "pushRight")}
          </div>
      `
  } else {
    studentComponent =
      `
        <div class="student">
            ${h1(student.name, "xx-large failing")}
            ${section(student.class, "section--padded")}
            ${aside(student.info, "pushRight")}
        </div>
    `
  }
  document.querySelector("#container").innerHTML += studentComponent
}
const fragment = document.createDocumentFragment()

const message = document.createElement('section')
message.textContent = "Hi, how are ya?"
fragment.appendChild(message)

const message2 = document.createElement('section')
message2.textContent = "Hello"
fragment.appendChild(message2)

const message3 = document.createElement('section')
message3.textContent = "Im doing alright, you?"
fragment.appendChild(message3)

const message4 = document.createElement('section')
message4.textContent = "When are we hanging out?"
fragment.appendChild(message4)

const message5 = document.createElement('section')
message5.textContent = "Who's house are we going to be at for thanksgiving?"
fragment.appendChild(message5)

document.querySelector("#messages").appendChild(fragment)

    console.log(messages)
    console.log(fragment)


