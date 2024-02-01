const memeGenerator = document.querySelector(".meme-generator");
const memeGeneratorBtn = document.querySelector(".meme-generator-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-image");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (author, url, title) => {
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme By: ${author}`;
  memeImage.setAttribute("src", url);
};
const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => {
      //   console.log(typeof response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      updateDetails(data.author, data.url, data.title);
    });
};

memeGeneratorBtn.addEventListener("click", generateMeme);

generateMeme();
