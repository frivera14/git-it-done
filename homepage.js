var getUserRepos = function () {
    fetch("https://api.github.com/users/octocat/repos").then(response)
    response.json().then(function(data) {
        console.log(data)
    });
}

getUserRepos();