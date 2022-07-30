const formImputList = document.querySelectorAll('.form-control')

const newUserForm = document.getElementById('new-user-form')
newUserForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    let userFormData = new FormData (newUserForm)
    let userObj = convertformDataToObj(userFormData)
    saveUser(userObj)
    Swal.fire('Listo!','Te regisraste con éxito','success')
})

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

const saveUser = (user) => {
    let userJSON = JSON.stringify(user)
    localStorage.setItem('userList', userJSON)
}

