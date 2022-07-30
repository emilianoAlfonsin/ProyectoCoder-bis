
const newUserForm = document.getElementById('new-user-form')
const userList = JSON.parse(localStorage.getItem('userList')) || []

newUserForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    let userFormData = new FormData (newUserForm)
    let userObj = convertformDataToObj(userFormData)
    saveUser(userObj)
    Swal.fire('Listo!','Te regisraste con éxito','success')
})

//----- transforma el Formdata en un objeto 
const convertformDataToObj = (userFormData) => {
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

// const saveUser = (user) => {
//     let userJSON = JSON.stringify(user)
//     localStorage.setItem('userList', userJSON)
// }
const saveUser = (userId) => {
    
    const usuarioRegistrado = userList.find((user) => user.email === userId)

    if (usuarioRegistrado){
        mensajeErrorRegistro()
    }else{
        
        const newUser = userId

        userList.push(newUser)
    }

    localStorage.setItem('userList', JSON.stringify(userList))
}

const mensajeErrorRegistro = () => {
    Swal.fire ("Intentalo nuevamente", "Este email ya se encuentra registrado", "error")
}