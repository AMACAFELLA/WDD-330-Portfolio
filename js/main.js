const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "/week3/index.html"
  },
  {
    label: "Week4 notes",
    url: "/week4/index.html"
  },
  {
    label: "Week5 notes",
    url: "/week5/index.html"
  }

]
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
