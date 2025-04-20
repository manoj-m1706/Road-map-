const defaultRoadmaps = {
    "become a web developer": [
      "Learn HTML & CSS",
      "Learn JavaScript Basics",
      "Build Mini Projects",
      "Learn Git & GitHub",
      "Learn React",
      "Create Portfolio Website",
      "Apply for Jobs / Freelance"
    ]
  };
  
  function generateRoadmap() {
    const input = document.getElementById("goalInput").value.trim().toLowerCase();
    const list = document.getElementById("roadmapList");
    const goalTitle = document.getElementById("goalTitle");
    list.innerHTML = "";
    goalTitle.textContent = "";
  
    if (input && defaultRoadmaps[input]) {
      goalTitle.textContent = `Goal: ${capitalize(input)}`;
      defaultRoadmaps[input].forEach((step, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${step}`;
        li.onclick = () => li.classList.toggle("done");
        list.appendChild(li);
      });
    } else {
      goalTitle.textContent = "⚠️ No roadmap found. Try: 'Become a Web Developer'";
    }
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  