// ---------- STUDENT DATA ----------
    const students = [
      { name: "John Doe", field: "Web Developer", age: 12, img: "https://randomuser.me/api/portraits/men/32.jpg", link: "https://john-doe-tech.netlify.app" },
      { name: "Jane Smith", field: "Data Scientist", age: 12, img: "https://randomuser.me/api/portraits/women/44.jpg", link: "https://janesmith-ai.vercel.app" },
      { name: "Michael Brown", field: "Mobile Developer", age: 12, img: "https://randomuser.me/api/portraits/men/22.jpg", link: "https://michaelapps.netlify.app" },
      { name: "Emily Johnson", field: "UI/UX Designer", age: 12, img: "https://randomuser.me/api/portraits/women/56.jpg", link: "https://emilyjohnson-design.vercel.app" },
      { name: "David Wilson", field: "Machine Learning Engineer", age: 12, img: "https://randomuser.me/api/portraits/men/18.jpg", link: "https://davidwilson-ml.netlify.app" },
      { name: "Sophia Martinez", field: "Cybersecurity Specialist", age: 12, img: "https://randomuser.me/api/portraits/women/68.jpg", link: "https://sophiasecure.tech" },
      { name: "Liam Anderson", field: "Full Stack Developer", age: 12, img: "https://randomuser.me/api/portraits/men/77.jpg", link: "https://liamanderson.dev" },
      { name: "Ava Thompson", field: "Game Developer", age: 12, img: "https://randomuser.me/api/portraits/women/45.jpg", link: "https://avathompson-games.netlify.app" },
      { name: "Akpan Oduma", field: "Cloud Engineer", age: 12, img: "assest/images/download.jpg"}
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
            <a href="${s.link}" target="_blank">Visit Website</a>
          `;
          studentGrid.appendChild(card);
        });
    };

    searchInput.addEventListener("input", e => renderStudents(e.target.value.toLowerCase()));
    renderStudents();