window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  let date = new Date();
  //   date.setTime();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  //   if (h < 10) {
  //     h = "0" + h;
  //   }
  //   if (m < 10) {
  //     m = "0" + m;
  //   }
  //   if (s < 10) {
  //     s = "0" + s;
  //   }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = `${h} : ${m} <small>: ${s} | ${session}</small>`;
  //   console.log(time);
  document.getElementById("DisplayClock").innerHTML = time;
  setTimeout(showTime, 1000);

  //   change body background
  let bg;

  const userName = "Naveen";
  const user = document.getElementById("User");
  //   console.log(user);
  if (h < 8 && session === "AM") {
    bg = `url(https://source.unsplash.com/1600x900/?sunrise)`;
    user.innerHTML = `Good Morning ${userName}`;
  } else if (h < 11 && session === "AM") {
    bg = `url(https://source.unsplash.com/1600x900/?morning,sun)`;
    user.innerHTML = `Good Day ${userName}`;
  } else if (h < 8 && session === "PM") {
    bg = `url(https://source.unsplash.com/1600x900/?evening)`;
    user.innerHTML = `Good Afternoon ${userName}`;
  } else {
    bg = `url(https://source.unsplash.com/1600x900/?night)`;
    user.innerHTML = `Good Night ${userName}`;
  }

  const body = document.querySelector("body");
  //   console.log(body);
  //   body.setAttribute("style", `background:${bg}`);
  body.style.background = `${bg} center/cover`;
}

document
  .querySelector(".focus-container input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const focus = document.querySelector(".focus-container input");
      document.querySelector(
        ".focus-container"
      ).innerHTML = `<h6>TODAY: </h6><h1>${focus.value}</h1>`;
    }
  });
