"use strict"

const email= document.querySelector("#email"),
    password= document.querySelector("#password"),
    loginBtn = document.querySelector("#loginBtn");



loginBtn.addEventListener("click", login);

function login() {
    if(!email.value) {
        return alert("email 를 입력해 주세요.");
    }

    if(!password.value) {
        return alert("비밀번호를 입력해주세요.");
    }

    const req = {
        email: email.value,
        password: password.value
    };

    fetch("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)}
    ).then((res) => res.json()).then((res)=>{
        if(res.success) {
            location.href ="/admin";
        } else {
            if(res.err) return alert(res.err);// 실제로는 error 를 client 엑 보여주면 안된다.
            alert(res.msg)
        }
    }).catch((err) => {
        console.log(err)
        console.error(new Error("로그인중 에러 발생"));
    });

}