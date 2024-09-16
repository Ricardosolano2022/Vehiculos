
//Arreglo
const Vehiculo: String[]= ['Kia', 'Picanto', '2015', 'Plateado', 'Jose'];

//Deficion de la interface

interface  Vehiculo{

    marca: string;
    modelo: string;
    año: string;
    color?: string;
    propietario?: string;

    //Metodo de encendido y apagado
    encender():void;
    apagar():void;}


    //Implementacion del objeto Vehiculo
export  let Auto: Vehiculo={
    
    marca: 'Kia',
    modelo: 'Picanto',
    año: '2015',
    color: 'Plateado',
    
    
    encender(){
           
        console.log(`El vehiculo de : ${this.marca} ${this.modelo} del año ${this.año} ${this.color} se ha encendido.`);},    
        
    apagar(){
        console.log(`El vehiculo de : ${this.marca} ${this.modelo} del año ${this.año} ${this.color} se ha apagado.`);},    
    }

    //Creacion de otro tipo de vehiculo

    export const Camion: Vehiculo = {
        marca: 'Ford',
        modelo: 'F-150',
        año: '2020',
        propietario: 'Jose',
    
        encender() {
            console.log(`El señor: ${this.propietario} ha encendido el : ${this.marca} ${this.modelo} del año ${this.año}`);
        },
        apagar() {
            console.log(`El señor: ${this.propietario} ha apagado el : ${this.marca} ${this.modelo} del año ${this.año}`);
        }
    };
        
  
