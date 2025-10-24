// ---------- STUDENT DATA ----------
    const students = [
      { name: "God'swill Uguru", field: "Full Stack Web Developer", description: "A website built for His church to promote the good news of Christ.", age: 18, img: "assest/images/godswill.jpeg", link: "https://all-bride-assembly-church.vercel.app/" },
      { name: "Ali Pelumi", field: "Back End Developer", description: "An online exclusive boutique, were users can get the best quality clothes and shoes.", age: 18, img: "assest/images/pelumi.jpeg", link: "https://wear-fizzy.netlify.app/" },
      { name: "Dev Tobbi", field: "Web Developer", description: "A website built for a logistic company demonstrating that even while learning our students are already making big banks with their skills.", age: 23, img: "assest/images/tobbi.jpeg", link: "https://reactlogistics.onrender.com/" },
      { name: "Jerry Emmanuel", field: "Full Stack Developer", description: "A live weather app that displays the weather of any city in real time..", age: 18, img: "assest/images/jerry.jpeg", link: "https://getall-weather.netlify.app/" },
      { name: "Victory Omoregie", field: "App Developer", description: "Vogg is built for simplicity and creativity. Whether you're a writer, student, or tech enthusiast, Vogg makes it easy to publish, share, and connect. Inspired by recent modern platforms, it aims to give you a professional yet friendly blogging space.", age: 21, img: "assest/images/victory.jpg", link: "https://vogg-production.up.railway.app/" },
      { name: "Ojo Emmanuel", field: "Web Developer", description: " A personal portfolio website that show cases his skill as a web developer.", age: 25, img: "assest/images/jojo.jpg", link: "https://jojo-emmanuel-portfolio.netlify.app/" },
      { name: "Emmanuel Attah", field: "Web Developer", description: " A personal portfolio website that show cases his skill as a web developer.", age: 23, img: "assest/images/emma.jpeg", link: "https://attahe.netlify.app/" },
    ];

    const studentGrid = document.getElementById("studentGrid");
    const searchInput = document.getElementById("searchInput");

    // Render Students
    const renderStudents = (filter = "") => {
      studentGrid.innerHTML = "";
      students
        .filter(s => s.name.toLowerCase().includes(filter) || s.field.toLowerCase().includes(filter))
        .forEach(s => {
          const card = document.createElement("div");
          card.classList.add("student-card");
          card.innerHTML = `
            <img src="${s.img}" alt="${s.name}">
            <h3>${s.name}</h3>
            <h4>${s.age} years old</h4>
            <p>${s.field}</p>
            <p>${s.description}</p>
            <a href="${s.link}" target="_blank">Visit Website</a>
          `;
          studentGrid.appendChild(card);
        });
    };

    searchInput.addEventListener("input", e => renderStudents(e.target.value.toLowerCase()));
    renderStudents();