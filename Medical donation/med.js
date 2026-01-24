document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = form.querySelector("input[type='number']").value;
    if (age < 18) {
      alert("Only 18+ users are allowed.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });
});
// Sample donor data (from donation form)
const donors = [
  { name: "Rahul", type: "Blood", value: "A+", contact: "9876543210" },
  { name: "Anita", type: "Organ", value: "Kidney", contact: "9123456780" },
  { name: "Suresh", type: "Blood", value: "O+", contact: "9988776655" }
];

document.getElementById("requestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const reqType = document.getElementById("requestType").value;
  const reqValue = document.getElementById("requestValue").value.trim().toUpperCase();

  const table = document.getElementById("matchTable");
  table.innerHTML = "";

  const matches = donors.filter(d =>
    d.type === reqType && d.value.toUpperCase() === reqValue
  );

  if (matches.length === 0) {
    table.innerHTML = `<tr><td colspan="4">No matching donors found</td></tr>`;
  } else {
    matches.forEach(d => {
      table.innerHTML += `
        <tr>
          <td>${d.name}</td>
          <td>${d.type}</td>
          <td>${d.value}</td>
          <td>${d.contact}</td>
        </tr>
      `;
    });
  }
});

