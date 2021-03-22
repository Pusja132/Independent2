const imgWrapperElem = document.querySelector(".images__warp")
const inputDescElem = document.querySelector("#imgOne");
const inputLinkElem = document.querySelector("#imgLink");
const saveBtnElem = document.querySelector("#mainBtn");



saveBtnElem.addEventListener("click", () => {
    if (inputLinkElem.innerText !== undefined && inputDescElem.innerText !== undefined) {
        let divImagesWrapper = document.createElement("div"),
        createdImages = document.createElement("img"),
        createdDesc = document.createElement("span"),
        createDropbutton  = document.createElement("button");

        divImagesWrapper.setAttribute("class", "image__container")

        createdImages.setAttribute("src", inputLinkElem.value);
        createdImages.setAttribute("alt", "atl txt");
        createdImages.setAttribute("class", "image");

        createdDesc.innerText = inputDescElem.value;

        createDropbutton.innerText = "Удалить";
        createDropbutton.setAttribute("class", "dropBtn");
        createDropbutton.addEventListener("click", () => {
            imgWrapperElem.removeChild(divImagesWrapper);
        })

        divImagesWrapper.appendChild(createdImages);
        divImagesWrapper.appendChild(createdDesc);
        divImagesWrapper.appendChild(createDropbutton)
        imgWrapperElem.appendChild(divImagesWrapper);
    }
}, false);