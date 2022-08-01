//-----Seccion para registrar usuarios (en proceso)

const newUserForm = document.querySelector('#new-user-form')

newUserForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    //Obtiene los datos del formulario en pares clave-valor
    const userFormData = new FormData (newUserForm)
    //Convierto los datos del FormData y los paso a un objeto que pueda manipular
    const newUser = convertFormDataToObj(userFormData)
    //Agrego el objeto obtenido al array de usuarios
    saveUser(newUser)
    Swal.fire('Listo!','Te regisraste con éxito','success')
})

//----- transforma el Formdata en un objeto ------
const convertFormDataToObj = (userFormData) => {
    let nombre = userFormData.get("nombre")
    let apellido = userFormData.get("apellido")
    let direccion = userFormData.get("direccion")
    let ciudad = userFormData.get("ciudad")
    let cp = userFormData.get("cp")
    let email = userFormData.get("email")
    let password = userFormData.get("password1")

    return {
        "nombre":nombre,
        "apellido":apellido,
        "direccion":direccion,
        "ciudad":ciudad,
        "cp":cp,
        "email":email,
        "password":password
    }
}


const userList = JSON.parse(localStorage.getItem('userList')) || []

const saveUser = (user) => {
    // aquí debería constatar que el usuario no esté registrado aún
    userList.push(user)
    localStorage.setItem('userList', JSON.stringify(userList))
}

// const mensajeErrorRegistro = () => {
//     Swal.fire ("Intentalo nuevamente", "Este email ya se encuentra registrado", "error")
// }