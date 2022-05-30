function getRepos() {
  fetch("https://api.github.com/users/jilquero/repos")
    .then((response) => response.json())
    .then((data) =>
      data.map((project) =>
        fetch(`https://api.github.com/repos/jilquero/${project.name}`)
          .then((oof) => oof.json())
          .then((data2) =>
            fetch(
              `https://api.github.com/repos/jilquero/${project.name}/readme`
            )
              .then((heh) => heh.json())
              .then((test) =>
                $(".projects__list").append(`
            <li class="card">
            <div class="card__ribbon">
            <a href="${project.html_url}">
                  <div class="card__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                  </div>
                  <div class="ribbon__back"></div>
                  <div class="ribbon__back"></div>
                  </a>
              </div>
              <div class="card__content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                      <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                      <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                  <span class="title">${project.name}</span>
                  <span class="language">${data2.language}</span>
                  <p class="project__readme"> ${atob(test.content).match(
                    /(?<=## About The Project\n\s*).*?(?=\s*##)/gs
                  )}<br>
                  ${data2.forks}
                  <i class="bi bi-diagram-2"></i>
                  ${data2.stargazers_count}
                  <i class="bi bi-star"></i>
                  ${data2.watchers}
                  <i class="bi bi-bell"></i>
                  </p>
              </div>
            
        </li>`)
              )
          )
      )
    )
    .catch((error) => console.error(error));
}

getRepos();

// $(".projects__list").append(`
//             <li class="card">
//             <a href="${project.html_url}">
//               <div class="lol">
//                   <div class="hmm">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
//                           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
//                         </svg>
//                   </div>
//                   <div class="cos"></div>
//                   <div class="cos"></div>
//               </div>
//               <div class="card__content">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
//                       <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
//                       <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
//                     </svg>
//                   <span class="title">${project.name}</span>
//                   <span class="language">${data2.language}</span>
//                   <p class="aha"> ${atob(test.content).match(/(?<=## About The Project\n\s*).*?(?=\s*##)/gs)} ${data2.forks} ${data2.stargazers_count} ${data2.watchers}</p>
//               </div>
//             </a>
//         </li>`)

// fetch("https://api.github.com/repos/jilquero/hdguard/readme")
//   .then((response) => response.json())
//   .then((data) => console.log((atob(data.content).match(/(?<=## About The Project\n\s*).*?(?=\s*##)/gs))));

// fetch("https://api.github.com/repos/jilquero/hdguard/readme")
//   .then((response) => response.json())
//   .then((data) => console.log(atob(data.content)));

// let repos;

// function getRepos() {
//   fetch("https://api.github.com/users/jilquero/repos")
//     .then((response) => response.json())
//     .then((data) =>
//       $(".projects__list").append(
//         data
//           .map(
//             (project) => `
//             <li class="project">
//                 <a href="${project.html_url}">
//                     <h3>${project.name}</h3>
//                         <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
//                         <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
//                         <path
//                             d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
//                             fill="currentColor"
//                             style="transform-origin: 130px 106px;"
//                             class="octo-arm">
//                         </path>
//                         <path
//                             d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
//                             fill="currentColor"
//                             class="octo-body"></path>
//                         </svg>;
//                 </a>
//              </li>`
//           )
//           .join("")
//       )
//     )
//     .catch((error) => console.error(error));
// }

// getRepos();

// function getRepos() {
//     fetch("https://api.github.com/users/jilquero/repos")
//       .then((response) => response.json())
//       .then((data) =>
//         data.map((project) =>
//           fetch(`https://api.github.com/repos/jilquero/${project.name}`)
//             .then((oof) => oof.json())
//             .then((data2) =>
//               console.log(
//                 data2.forks,
//                 data2.stargazers_count,
//                 data2.watchers,
//                 data2.language
//               )
//             )
//         )
//       )
//       .catch((error) => console.error(error));
//   }

// function getRepos() {
//   fetch("https://api.github.com/users/jilquero/repos")
//     .then((response) => response.json())
//     .then((data) =>
//       data.map((project) =>
//         fetch(`https://api.github.com/repos/jilquero/${project.name}`)
//           .then((oof) => oof.json())
//           .then((data2) =>
//             $(".projects__list").append(`
//                         <li class="project">
//                             <a href="${project.html_url}">
//                                 <h3>${project.name}</h3>
//                                 <h3>${data2.forks}</h3>
//                                 <h3>${data2.stargazers_count}</h3>
//                                 <h3>${data2.watchers}</h3>
//                                 <h3>${data2.language}</h3>
//                                     <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
//                                     <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
//                                     <path
//                                         d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
//                                         fill="currentColor"
//                                         style="transform-origin: 130px 106px;"
//                                         class="octo-arm">
//                                     </path>
//                                     <path
//                                         d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
//                                         fill="currentColor"
//                                         class="octo-body"></path>
//                                     </svg>;
//                             </a>
//                          </li>`)
//           )
//       )
//     )
//     .catch((error) => console.error(error));
// }

// getRepos();
