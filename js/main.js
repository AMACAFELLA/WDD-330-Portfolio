const links = [
  {
    label: "Week 1",
    url: "week1/index.html",
  },
  {
    label: "Week 2",
    url: "week2/index.html",
  },
  {
    label: "week 3",
    url: "week3/index.html",
  },
  {
    label: "week 4",
    url: "week4/index.html",
  },
  {
    label: "week 5",
    url: "week5/index.html",
  },
  {
    label: "Todo-List",
    url: "Todo/todo.html",
  },
  {
    label: "Week 7",
    url: "week7/index.html",
  },
  {
    label: "Week 8",
    url: "week8/index.html",
  },
  {
    label: "week 9",
    url: "week9/index.html",
  },
  {
    label: "week 10",
    url: "week10/index.html",
  },
  {
    label: "week 11",
    url: "week11/index.html",
  },
  {
    label: "Final Project",
    url: "FinalProject/home.html",
  },
];
 
let linksList = document.getElementById("linksList");


for(let i = 0; i < links.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let label = document.createTextNode(links[i].label);
  a.href = links[i].url;
  a.appendChild(label);
  li.appendChild(a);
  linksList.appendChild(li);
}
