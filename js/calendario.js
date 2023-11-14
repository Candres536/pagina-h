let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];
var fecha = new Date();

// Obtener el mes actual (los meses comienzan desde 0, por lo que se suma 1)
var mes = fecha.getMonth();
let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();


let dates = document.getElementById('dates');
let month = document.getElementById('mounth');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-mounth');
let nextMonthDOM = document.getElementById('next-mounth');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());

const writeMonth = (month) => {
  for(let i = startDay(); i>0;i--){
    dates.innerHTML += ` <div class="calendario-days calendario-item " id="dias"><div class="numero last-day">${getTotalDays(monthNumber-1)-(i-1)}</div><div class="n-evento"></div></div>`;
  }
  for(let i=1; i<=getTotalDays(month); i++){
    if(i===currentDay && monthNumber === mes  && currentYear === 2023) {
      dates.innerHTML += ` <div class="calendario-days calendario-item dia${i}" id="dias"><div class="numero today">${i}</div><div class="n-evento">Hoy</div></div>`;
    }else{
      dates.innerHTML += ` <div class="calendario-days calendario-item dia${i}" id="dias"><div class="numero">${i}</div><div class="n-evento"></div></div>`;
    }
  }
 
  
}

const getTotalDays = month => {
  if(month === -1) month = 11;
  if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      return  31;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      return 30;
  } else {
      return isLeap() ? 29:28;
  }
}

const isLeap = () => {
  return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
  let start = new Date(currentYear, monthNumber, 1);
  return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
  if(monthNumber !== 0){
    monthNumber--;
  }else{
    monthNumber = 11;
    currentYear--;
  }
  setNewDate();
}

const nextMonth = () => {
  if(monthNumber !== 11){
    monthNumber++;
  }else{
    monthNumber = 0;
    currentYear++;
  }
  setNewDate();
}

const setNewDate = () => {
  currentDate.setFullYear(currentYear,monthNumber,currentDay);
  month.textContent = monthNames[monthNumber];
  year.textContent = currentYear.toString();
  dates.textContent = '';
  writeMonth(monthNumber);
}

writeMonth(monthNumber);

// Obtener ancho visible de la ventana
function actualizarContenido() {
  // Obtener ancho visible de la ventana
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Verificar si el ancho visible es mayor que 300px
  if (windowWidth > 300) {
    // Cambiar los contenidos de los elementos con los IDs correspondientes
    document.getElementById("lunes").innerHTML = "Lunes";
    document.getElementById("martes").innerHTML = "Martes";
    document.getElementById("miercoles").innerHTML = "Miércoles";
    document.getElementById("jueves").innerHTML = "Jueves";
    document.getElementById("viernes").innerHTML = "Viernes";
    document.getElementById("sabado").innerHTML = "Sábado";
    document.getElementById("domingo").innerHTML = "Domingo";
  } else {
    // Cambiar los contenidos de los elementos con los IDs correspondientes
    document.getElementById("lunes").innerHTML = "lu";
    document.getElementById("martes").innerHTML = "ma";
    document.getElementById("miercoles").innerHTML = "mi";
    document.getElementById("jueves").innerHTML = "ju";
    document.getElementById("viernes").innerHTML = "vi";
    document.getElementById("sabado").innerHTML = "sa";
    document.getElementById("domingo").innerHTML = "do";
  }
}

// Asignar la función al evento resize y al evento load del objeto window
window.addEventListener("resize", actualizarContenido);
window.addEventListener("load", actualizarContenido);

// Ejecutar la función al cargar inicialmente la página
actualizarContenido();




