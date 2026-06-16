const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName").value;

  const email = document.getElementById("registerEmail").value;

  const password = document.getElementById("registerPassword").value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    alert(data.message);
  } catch (error) {
    console.log(error);
  }
});

// Login Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include",

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    localStorage.setItem("accessToken", data.accessToken);

    alert("Login Success");
  } catch (error) {
    console.log(error);
  }
});

// Profile
const profileBtn = document.getElementById("profileBtn");

profileBtn.addEventListener("click", async () => {
  let token = localStorage.getItem("accessToken");

  let response = await fetch("http://localhost:5000/api/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    token = await refreshAccessToken();

    response = await fetch("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  const data = await response.json();

  document.getElementById("result").innerText = JSON.stringify(data, null, 2);
});

// Logout
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",

      credentials: "include",
    });

    const data = await response.json();

    localStorage.removeItem("accessToken");

    alert(data.message);
  } catch (error) {
    console.log(error);
  }
});

// Refresh Token

const refreshAccessToken = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    localStorage.setItem("accessToken", data.accessToken);

    return data.accessToken;
  } catch (error) {
    console.log(error);

    return null;
  }
};
