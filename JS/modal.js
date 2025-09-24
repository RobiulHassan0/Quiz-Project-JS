const modal = document.getElementById('modalPopup');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.onclick = () => {
    modal.classList.add("show");
}

closeModal.onclick = () => {
    modal.classList.remove("show");
}

function login(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const modalContent = document.getElementById('modalContent');
    const oldError = document.getElementById('errorMsg');

    if(oldError){
        oldError.remove();
    }

    if(name && email){
        // Redirect to Quiz Page
        window.location.href = 'quiz.html';
    }else{
        const p = document.createElement('p')
        p.id = 'errorMsg';
        p.innerText = 'Please enter both name and email!';
        p.style.color = 'red';
        p.style.margin = '10px 0';

        const buttons = modalContent.querySelector('.buttons');
        modalContent.insertBefore(p, buttons);
    }
}