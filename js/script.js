// const backendUrl = "http://localhost:8080/api"
const backendUrl = "https://library-backend.koyeb.app/api"

function checkForAuth(userRole) {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
      console.log("Token has expired.");
      localStorage.removeItem("token");
      window.location.href = "/account/login.html";
    } else {
      console.log("Token is not expired.");
      const role = payload.role;
      if (role !== userRole) {
        document.body.innerHTML =
          "<h1>You are Not Authorized to open this page</h1>";
        window.location.href = "/account/login.html";
      }
    }
  } else {
    window.location.href = "/account/login.html";
  }
}



function logout(){
  localStorage.removeItem("token");
  window.location.href = "/account/login.html";
}



document.getElementById('currentYear').innerHTML = new Date().getFullYear() ;