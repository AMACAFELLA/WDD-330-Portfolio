const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
    label: "Week2 notes",
<<<<<<< HEAD
    url: "./week2/index.html",
    label: "Week3 notes",
    url: "/week3/index.html",
    label: "Week4 notes",
    url: "/week4/index.html",
    label: "Week5 notes",
    url: "/week5/index.html"
=======
    url: "./week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "./week3/index.html"
  },
  {
    label: "Week4 notes",
    url: "./week4/index.html"
>>>>>>> 1c20e6cef300818add69f0248aef30cb82dff6a2
  },
  {
    label: "Week1 notes",
    url: "week1/index.html",
    label: "Week2 notes",
    url: "./week2/index.html",
    label: "Week3 notes",
    url: "/week3/index.html",
    label: "Week4 notes",
    url: "/week4/index.html",
    label: "Week5 notes",
<<<<<<< HEAD
    url: "/week5/index.html"
  }];
=======
    url: "./week5/index.html"
  }

]
>>>>>>> 1c20e6cef300818add69f0248aef30cb82dff6a2
let linksList = document.getElementById("linksList");
//make each label and url into a link and add it to the list
for (let i = 0; i < links.length; i++) {
  let link = document.createElement("a");
  link.href = links[i].url;
  link.innerHTML = links[i].label;
  linksList.appendChild(link);
}

/*for(let i = 0; i < links.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let label = document.createTextNode(links[i].label);
  a.href = links[i].url;
  a.appendChild(label);
  li.appendChild(a);
  linksList.appendChild(li);
}*/
