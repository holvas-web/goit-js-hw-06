const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails);
    event.currentTarget.reset();
}


// const form = document.querySelector(`.login-form`);
// form.addEventListener(`submit`, handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const { elements: { email, password } } = event.currentTarget;
//     //const password: any
//     if (email.value === "" || password.value === "") {
//         alert(`Всі поля повинні бути заповнені`)
//     }
//     console.log("email: "
//         `${email.value}`, "password: "
//         `${password.value}`);
//     event.currentTarget.reset();
// }

// function multiply(...form) {
//     console.log(form)
// }

