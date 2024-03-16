
document.querySelector ('.card_form').addEventListener ('submit', handleSubmit);
const emailInput = document.querySelector ('.card_input-email');

function handleSubmit (e)
{
    e.preventDefault ();

    emailInput.classList.remove ('invalid');
    if (!isEmail (emailInput.querySelector ('.card_form_email').value))
    {
        emailInput.classList.add ('invalid');
        emailInput.querySelector ('.card_input-error').textContent = 'Please provide a valid email';
    }

}




function isEmail (val){
    return val.match (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
}