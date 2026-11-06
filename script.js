// Noope (ヌープ) - Common JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Highlight active bottom navigation based on current HTML
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".bottom-nav .nav-item");
  
  navLinks.forEach(link => {
    const href = link.getAttribute("href").replace("./", "");
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  # Image error fallback to gray placeholder
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("error", function() {
      this.style.opacity = "0";
    });
  });

  // Clear button in search input
  const searchInput = document.querySelector(".search-input");
  const clearBtn = document.querySelector(".search-clear");
  if (searchInput && clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchInput.focus();
    });
  }
});

// Toast notification helper
function showToast(message) {
  let toast = document.createElement("div");
  toast.innerText = message;
  toast.style.position = "fixed";
  toast.style.bottom = "80px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.backgroundColor = "rgba(0,0,0,0.8)";
  toast.style.color = "#fff";
  toast.style.padding = "10px 18px";
  toast.style.borderRadius = "20px";
  toast.style.fontSize = "13px";
  toast.style.zIndex = "999";
  toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.5s";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 2000);
}

// Interactive helper handlers
function handleNotification() {
  showToast("通知設定を切り替えました");
}

function handleLogout() {
  if (confirm("ログアウトしますか？")) {
    showToast("ログアウトしました");
  }
}
