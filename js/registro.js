// const userList = JSON.parse(localStorage.getItem ('userlist')) || []
//const newUserForm = document.getElementById('new-user-form')
// const btnRegistro = document.querySelector('#btn-registro')

// class User {
//     constructor ( nombre, apellido, direccion, ciudad, cp, email, password){
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.direccion = direccion,
//         this.ciudad = ciudad,
//         this.cp = cp,
//         this.email = email,
//         this.password = password
//     }
// }

// const registrarUsuario = (userName) => {
//     let usuarioRegistrado = userList.find((user) => user.nombre === userName)

//     if (usuarioRegistrado){
//         mensajeErrorRegistro()
//     } else { 
//         usuario = JSON.parse(localStorage.setItem('userList'))
//     }
// }

// const mensajeErrorRegistro = () => {
//     swal("Ups!", "Ya te encuentras registrado", "error");
// }

// const crearUsuario = () => {
    
//     const nombre = document.getElementById('nombre')
//     const apellido = document.getElementById('apellido')
//     const direccion = document.getElementById('direccion')
//     const ciudad = document.getElementById('ciudad')
//     const cp = document.getElementById('cp')
//     const email = document.getElementById('email')
//     const password = document.getElementById('inputPassword1')
//     const pass2 = document.getElementById('inputPassword2')

    
//     let usuario = new User (nombre, apellido, direccion, ciudad, cp, email, password)

//     userList.push(usuario)
//     localStorage.setItem('userList', JSON.stringify(userList))
    
// }

// btnRegistro.addEventListener('submit', crearUsuario())

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