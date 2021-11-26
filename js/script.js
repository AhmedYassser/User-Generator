async function getRandomuser() {
    let response = await fetch("https://randomuser.me/api/");
    let Data = await response.json();
    let allData = Data.results[0];
    Display(allData)
}

function Display(allData) {
    let Name = document.getElementById("name");
    let gender = document.getElementById("gender");
    let email = document.getElementById("email");
    let Phone = document.getElementById("phone");
    let Location = document.getElementById("location");
    let Image = document.getElementById("img");
    // display the data
    Name.innerText = `${allData.name.title} ${allData.name.first} ${allData.name.last} `
    gender.innerText = `${allData.gender}`
    email.innerText = `${allData.email}`
    phone.innerText = `${allData.phone}`
    Location.innerText = `${allData.location.country}`
    Image.setAttribute("src", `${allData.picture.large}`);
}
