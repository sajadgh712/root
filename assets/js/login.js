
const users = [ 
  { userName: "sajad@gmail.com", password: "1234" },
  ]; 
  
  const loginBtn = document.getElementById("loginBtn"); 
  // const socialMediaAddress = document.getElementById("socialMediaAddress");

  
  // socialMediaAddress.addEventListener ("click",  (e) =>{
  //   e.preventDefault();
  //   location.replace("./aboutus.html")
  // });


 
loginBtn.addEventListener("click", (e) => { 
  e.preventDefault(); 
  const email = document.getElementById("email"); 
  const password = document.getElementById("password"); 
  const modalBody = document.querySelector(".modal-body"); 
 
  const filteredUser = users.filter(item => (item.userName === email.value) && (item.password === password.value)); 
 
  if (filteredUser.length > 0) { 
    modalBody.innerHTML = "Log in successful!"; 
    modalBody.classList.add("text-success"); 
    console.log(filteredUser[0]);

    const closeBtn = document.getElementById("login");
    closeBtn.addEventListener("click", ()=> {
        location.replace("./pages/home.html");
    })
  } else { 
    modalBody.classList.add("text-danger"); 
    modalBody.innerHTML = "Invalid credentials"; 
  } 
});



