const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const formElems = event.currentTarget.elements;

    const textEmail = formElems.email;
    const textPassw = formElems.password;

    const trimEmail = textEmail.value.trim();
    const trimPassw = textPassw.value.trim();

    if (trimEmail === "" || trimPassw === "") {
    return alert('All form fields must be filled in');
    };

    const data = {
        email: trimEmail,
        password: trimPassw
    };

    console.log(data);

    event.currentTarget.reset();
});
