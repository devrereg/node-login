"use strict"

const email= document.querySelector("#email"),
    name= document.querySelector("#name"),
    password= document.querySelector("#password"),
    confirmPassword= document.querySelector("#confirmPassword"),
    registerBtn = document.querySelector("#registerBtn");



registerBtn.addEventListener.off("click", register);

function register() {

    if(!email.value) {
        return alert("email 를 입력해 주세요.");
    }

    if(password.value !== confirmPassword.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        email: email.value,
        name: name.value,
        password: password.value,
    };

    fetch("/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)}
    ).then((res) => res.json()).then((res)=>{
        if(res.success) {
            location.href ="/auth/login";
        } else {
            alert(res.msg)
        }
    }).catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });

}