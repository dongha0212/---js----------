const clock = document.querySelector("#clock")

function getClock (){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0"); 
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = (`${hours}:${minutes}:${seconds}`)
}
// padStart는 string에 쓰는 함수이기때문에 String으로 감싸 number > string 으로 바꿔줘야함

getClock()
setInterval(getClock, 1000);
// Interval이 1초뒤 시작되기때문에 새로고침 후 바로 보이게 하기 위해 즉시실행을 한번 시켜줌