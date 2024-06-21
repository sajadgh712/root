const login = document.getElementById("login");

login.addEventListener("click", (e) => {
  e.preventDefault();
  location.replace("./login.html");
});


const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

const bodyTest = document.getElementById("sportdetails");
bodyTest.innerHTML = selectedCar.images.map(
  item =>
    `
    <div class ="col-lg-3 col-sm-12">
        <div class="cards p-1">
            <div 
                class="w-100 h-100"
            >
                <img 
                    src="${item}" 
                    class="w-100 h-100 img-fluid rounded"
                    alt="..."
                >
            </div>
        </div>
    </div>
    `
).join('') + `
<p class="font text-center mystyle">${selectedCar.description}</p>
`









