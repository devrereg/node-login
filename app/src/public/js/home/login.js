"use strict"

const email= document.querySelector("#email"),
    password= document.querySelector("#password"),
    loginBtn = document.querySelector("#loginBtn");



loginBtn.addEventListener.off("click", login);

function login() {
    const req = {
        email: email.value,
        password: password.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)}
    ).then((res) => res.json()).then((res)=>{
        if(res.success) {
            location.href ="/";
        } else {
            alert(res.msg)
        }
    }).catch((err) => {
        console.error(new Error("로그인중 에러 발생"));
    });

}