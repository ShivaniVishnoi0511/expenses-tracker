const budgets = [
  { name: 'mybudget', income: 50000, start: '06/18/2023', end: '07/18/2023' },
  { name: 'secondbudget', income: 60000, start: '06/18/2023', end: '07/18/2023' },
  { name: 'thirdbudget', income: 70000, start: '06/20/2023', end: '07/20/2023' }
];

const tableBody = document.getElementById('budget-table-body');

function renderBudgets() {
  tableBody.innerHTML = '';
  budgets.forEach((budget, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${budget.name}</td>
      <td>${budget.income.toFixed(2)}</td>
      <td>${budget.start}</td>
      <td>${budget.end}</td>
      <td><input type="radio" name="select-budget" /></td>
      <td><button class="details-btn">Details</button></td>
      <td><button class="edit-btn">Edit</button></td>
      <td><button class="delete-btn" onclick="deleteBudget(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteBudget(index) {
  budgets.splice(index, 1);
  renderBudgets();
}

renderBudgets();
