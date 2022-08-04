const communityButton = document.getElementById('category-btn');

const getCommunities = async () => {
  const result = await fetch('/communities', {
    method: 'GET',
  })
    const json = result.json()
    return json;
}

const buttonHandler = () =>
  getCommunities().then((response) => response.forEach((item) => renderCommunities(item)));

communityButton.addEventListener('click', buttonHandler);