function getMD(name) {
  fetch(`https://api.github.com/repos/hasan-kilici/powershell-dersleri/contents/docs/${name}`)
    .then(async (data) => {
      let file = await data.json();
      let fileurl = file.download_url;
      setTimeout(() => {
        fetch(fileurl).then(async (data) => {
          let content = await data.text();
          let contentHTML = marked.parse(content);
          document.getElementById("main").innerHTML = contentHTML
          Prism.highlightAll();
        }, 1);
      });
    });
}

function getAllFiles() {
  document.getElementById("content").innerHTML = "";
  fetch(`https://api.github.com/repos/hasan-kilici/powershell-dersleri/contents/docs/`).then(async (data) => {
    let Docs = await data.json();
    for (let i = 0; i < Docs.length; i++) {
      let name = Docs[i].name.split(".md")
      document.getElementById("content").innerHTML += `
          <li>
            <a href="#/md?param=${Docs[i].name}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="ml-3">${name[0]}</span>
            </a>
         </li>`;
    }
  })
}

window.onload = ()=>{getAllFiles()}
