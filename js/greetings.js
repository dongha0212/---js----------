const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event){
  event.preventDefault(); // 브라우저 기본동작 막기
  loginForm.classList.add(HIDDEN_CLASSNAME) // form 다시 숨겨주기
  const username = loginInput.value; // input 에서 입력받은 값 기억
  localStorage.setItem(USERNAME_KEY, username) // localStorage에 username(key):input입력값(value)로 저장
  paintGreetings(username); // input에서 입력받은 값을 인자로 받음
}

function paintGreetings (username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY) // localStorage에 저장된 값 가져오기

if (savedUsername === null) { // 저장된 값이 없다면? 
  loginForm.classList.remove(HIDDEN_CLASSNAME); // form을 보여주고 
  loginForm.addEventListener("submit", onLoginSubmit); // 제출을 기다렸다가 제출되면 onLoginSubmit 실행
} else { // 저장된 값이 있다면? (= null이 아니라면?)
  paintGreetings(savedUsername); // localStorage 의 value에 저장된 값을 인자로 받아 painGreetings 실행
}