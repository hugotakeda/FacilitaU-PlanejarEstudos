document.addEventListener('DOMContentLoaded', () => {
    const activityForm = document.getElementById('activityForm');
    const activityList = document.getElementById('activityList');
  
    function loadActivities() {
      fetch('/api/activities')
        .then(response => response.json())
        .then(data => {
          activityList.innerHTML = '';
          data.forEach(activity => {
            const li = document.createElement('li');
            li.innerHTML = `
              <strong>${activity.title}</strong>
              <p>${activity.description}</p>
              <small>Data de entrega: ${activity.due_date}</small>
            `;
            activityList.appendChild(li);
          });
        });
    }
  
    activityForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const due_date = document.getElementById('due_date').value;
  
      fetch('/api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, due_date }),
      })
      .then(response => response.json())
      .then(() => {
        loadActivities();
        activityForm.reset();
      });
    });
  
    loadActivities();
  });