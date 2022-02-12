const links = [
  {
    label: "Week 1",
    url: "/week1/index.html",
  },
  {
    label: "Week 2",
    url: "/week2/index.html",
  },
  {
    label: "week 3",
    url: "/week3/index.html",
  },
  {
    label: "week 4",
    url: "/week4/index.html",
  },
  {
    label: "week 5",
    url: "/week5/index.html",
  }
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
