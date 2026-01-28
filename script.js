const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

const modal = document.getElementById("modal");
const body = document.getElementById("modalBody");

document.querySelectorAll(".project-card").forEach(card=>{
  card.onclick=()=>{
    body.innerHTML=`
      <h3>${card.querySelector("h3").innerText}</h3>
      <p>${card.querySelector(".subtitle").innerText}</p>
      <p>This project focuses on clean system design, real-world constraints,
      and scalable implementation.</p>`;
    modal.style.display="flex";
  };
});
document.getElementById("closeModal").onclick=()=>modal.style.display="none";
