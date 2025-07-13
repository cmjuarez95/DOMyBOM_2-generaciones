class Persona {
    #edad;
    #nombre;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;



    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento) {
        this.#nombre=nombre,
        this.#edad=edad,
        this.#dni=dni,
        this.#sexo=sexo,
        this.#peso=peso,
        this.#altura=altura,
        this.#anioNacimiento=anioNacimiento
        
    }

    get getNombre(){
        return(this.#nombre)
    }
    set setNombre(nombre){
        this.#nombre=nombre;

    }

    get getEdad(){
        return(this.#edad)
    }
    set setEdad(edad){
        this.#edad=edad;

    }

    get getDni(){
        return(this.#dni)
    }
    set setDni(dni){
        this.#dni=dni;
    }

    get getSexo(){
        return(this.#sexo)
    }
    set setSexo(sexo){
        this.#sexo=sexo;
    }
    get getPeso(){
        return(this.#peso)
    }
    set setPeso(peso){
        this.#peso=peso;
    }
    get getAltura(){
        return(this.#altura)
    }
    set setAltura(altura){
        this.#altura=altura;
    }
    get getAnioNacimiento(){
        return(this.#anioNacimiento)
    }
    set setAnioNacimiento(anioNacimiento){
        this.#anioNacimiento=anioNacimiento;
    }

    mostrarGeneracion(){
        if(this.getAnioNacimiento<=1948){
            alert(`${this.getNombre} pertenece a la generacion Silent Generation (Los niños de la posguerra) y su rasgo característico es la AUSTERIDAD 😑`)
        }else if(this.getAnioNacimiento<=1968){
            alert(`${this.getNombre} pertenece a la generacion Baby Boom y su rasgo característico es la AMBICIÓN 🤑`)
        }else if(this.getAnioNacimiento<=1980){
            alert(`${this.getNombre} pertenece a la generacion X y su rasgo característico es la OBSESION POR EL ÉXITO 😎`)
        }else if(this.getAnioNacimiento<=1993){
            alert(`${this.getNombre} pertenece a la generacion Y (millennials) y su rasgo característico es la FRUSTRACIÓN 😖`)
        }else{
            alert(`${this.getNombre} pertenece a la generacion Z y su rasgo característico es la IRREVERENCIA 😋`)
        }
    }
    mayorEdad(){
        if(this.getEdad<=0 || this.getEdad>120){
            alert("Edad inválida, por favor ingresa un numero entre 0 y 120")
        }

        if (this.getEdad >= 18){
            alert("Es mayor de edad")
        }else{
            alert("es menor de edad")
        }
    }
}

const obtenerPersona=(e)=>{ //se pone la e si o si en los eventos submit
    e.preventDefault()  //para que no se me recargue la pagina por el evento submit, se usa SIEMPRE en los forms
    console.log(e)
    console.log("desde la funcion obtener Persona")

    const input = document.querySelectorAll(".form-control") //me da un array de los objetos q cumplen esa clase
    console.log(input)  //muestro lo que pongo en el input
    persona.setNombre=input[0].value
    persona.setEdad=input[1].value
    persona.setDni=input[2].value
    persona.setSexo=input[3].value
    persona.setPeso=input[4].value
    persona.setAltura=input[5].value
    persona.setAnioNacimiento=input[6].value

    console.log(persona.getNombre)
    console.log(persona.getAnioNacimiento)
    btnGen.classList.remove("disabled")
    btnEdad.classList.remove("disabled")

    formulario.reset()
}

const persona = new Persona
const btnGen=document.querySelectorAll(".btn-success")[0]
const btnEdad=document.querySelectorAll(".btn-success")[1]
const formulario = document.querySelector("#formPersona")

formulario.addEventListener("submit", obtenerPersona)
btnGen.addEventListener("click",() => persona.mostrarGeneracion())
btnEdad.addEventListener("click",() => persona.mayorEdad())