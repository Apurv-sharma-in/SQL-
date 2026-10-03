const form = document.getElementById('appointmentForm');
const userList = document.getElementById('userList');

window.addEventListener('DOMContentLoaded', loadUsers);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    try {
        await axios.post('http://localhost:3000/api/add', {name, phone, email });
        form.reset();
        loadUsers(); 
    } catch (err) {
        console.error('Error submitting form data:', err);
        alert('Failed to save user information.');
    }
});

async function loadUsers() {
    try {
        userList.innerHTML = ''; 
        const response = await axios.get('http://localhost:3000/api/');
        
        response.data.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${user.name} - ${user.phone} - ${user.email}</span>
                <button class="delete-btn" onclick="deleteAppointment(${user.id})">Delete</button>
                <button class="edit-btn" style="background: orange; color: white; border: none; padding: 3px 8px; cursor: pointer; margin-right: 5px;" 
                        onclick="editAppointmentDetails(${user.id}, '${user.name}', '${user.phone}', '${user.email}')">Edit</button>
            `;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error('Error loading stored users:', err);
    }
}

window.deleteAppointment = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/api/delete/${id}`);
        loadUsers(); 
    } catch (err) {
        console.error('Error handling delete requests:', err);
    }
};

window.editAppointmentDetails = (id, name, phone, email) => {
    document.getElementById('username').value = name;
    document.getElementById('phone').value = phone;
    document.getElementById('email').value = email;
    
    editUserId = id;
    form.querySelector('button[type="submit"]').textContent = 'Update'; 
};

window.deleteAppointment = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/api/delete/${id}`);
        loadUsers(); 
    } catch (err) {
        console.error('Error handling delete requests:', err);
    }
};