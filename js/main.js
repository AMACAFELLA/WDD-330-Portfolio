const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    document.body.appendChild(a);
  });
