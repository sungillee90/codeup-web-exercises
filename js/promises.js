

function getUserLastCommit (username) {
    //https://api.github.com/users/USERNAME/events/public
    let url = `https://api.github.com/users/${username}/events/public`;
    console.log(url);
    // GET /users/USERNAME/events/public
    return fetch(url, {headers: {'Authorization': `token ${githubPersonalAccessToken}`}})
        .then(response => response.json()
            .then( listOfEvents => {
                for(let event of listOfEvents){
                    if(event.type === 'PushEvent'){
                        return event.created_at;
                    }
                }
            })
        )
}
//
// function getUserLastCommit(username) {
//     let url = `https://api.github.com/users/${username}/events/public`;
//
//     return fetch(url, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
//         .then(response => response.json()
//             .then( listOfEvents => {
//                 for(let event of listOfEvents){
//                     if(event.type === 'PushEvent'){
//                         return event.created_at;
//                     }
//                 }
//             })
//         )
// }


getUserLastCommit('sungillee90')
    .then( lastCommitDate => console.log('lastCommitDate',lastCommitDate));
getUserLastCommit('sungillee90')
    .then( lastCommitDate => document.body.innerHTML = `${lastCommitDate} lastCommitDate`);

const wait = miliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(miliseconds);
        }, miliseconds);
    });
};

wait(1000).then((ms) => console.log(`You\'ll see this after ${ms/1000} second`));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));