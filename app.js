const providers = [
    { id: 1, name: "Dr. Maria Lopez", specialty: "General Practitioner", country: "Mexico", language: "Spanish" },
    { id: 2, name: "Dr. Ahmed Khan", specialty: "Internal Medicine", country: "India", language: "Hindi, English" },
    { id: 3, name: "Dr. Susan Lee", specialty: "Pediatrics", country: "USA", language: "English, Korean" },
  ];

  function showSection(section) {
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("providers-section").classList.add("hidden");
    document.getElementById("consultation-section").classList.add("hidden");

    document.getElementById(section + "-section").classList.remove("hidden");
  }

  function populateProviders() {
    const list = document.getElementById("provider-list");
    const select = document.getElementById("provider");
    list.innerHTML = "";
    select.innerHTML = '<option value="">-- Choose a provider --</option>';

    providers.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = `${p.name} — ${p.specialty} — ${p.country} — Languages: ${p.language}`;
      list.appendChild(li);

      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = `${p.name} (${p.specialty} - ${p.country})`;
      select.appendChild(option);
    });
  }

  document.getElementById("consultation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Consultation request submitted! We will contact you soon.");

    this.reset();
    showSection("home");
  });

  // Initialize providers list on page load
  window.onload = () => {
    populateProviders();
  };