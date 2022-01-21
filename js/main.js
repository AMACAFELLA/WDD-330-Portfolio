const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "/week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "/week3/index.html"
    }
  ]
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    document.body.appendChild(a);
  });
