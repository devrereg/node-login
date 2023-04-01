class Profile {

    profileForm = {
        alias: "",
        introduce: "",
    }
    constructor() {

    }

    getProfileForm() {
        return this.profileForm;
    }
}


init();

function init() {
    initEventListener()
}

function initEventListener() {
    let avatar = document.getElementById("avatar");
    let avatarInput = document.getElementById("avatarInput");

    avatar.addEventListener("click",() => {
        avatarInput.click();
    });

    avatarInput.addEventListener("change",(e) => {
        const selectedFile = [...e.target.files];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(selectedFile[0]);

        fileReader.onload = function () {
            document.getElementById("prevImage").src = fileReader.result;
            avatar.classList.add("is-prev")
        };
    })
}

function prevImage() {

}
function changeAvatar(file) {
    console.log(file)
}