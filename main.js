const linksSocialMedia = {
  instagram: 'jessicaguedes.tech',
  linkedin: 'in/jéssica-guedes-a323a11b7',
  github: 'jessica-guedes'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    //userImage.src = data.avatar_url função para mudar imagem para foto que está no github

  })
}

getGitHubProfileInfos()


