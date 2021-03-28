import { pangram } from './modules/pangram.js';
import { leapYear } from './modules/leapYear.js';
import { deleteUnique } from './modules/deleteUniques.js';
import { convertToRomans } from './modules/convertToRomans.js';

//Is pangram
const btnPangram = document.getElementById('btnPangram');
const txtPangram = document.getElementById('txtPangram');
const pPangram = document.getElementById('pPangram');

btnPangram.addEventListener('click', () => {
  let valueTxtPangram = txtPangram.value;
  pangram(valueTxtPangram)? 
    (pPangram.innerHTML = `${valueTxtPangram} es un pangrama`):
    (pPangram.innerHTML = `${valueTxtPangram} no es un pangrama`);
});

//Is leap year

const btnLeapYear = document.getElementById('btnLeapYear');
const inputLeapYear = document.getElementById('inputLeapYear');
const pLeapYear = document.getElementById('pLeapYear');

btnLeapYear.addEventListener('click', ()=>{
    let valueInputLeapYear = inputLeapYear.value;
    leapYear(valueInputLeapYear)?
    (pLeapYear.innerHTML = `${valueInputLeapYear} es un año bisiesto`):
    (pLeapYear.innerHTML = `${valueInputLeapYear} no es un año bisiesto`)
});

//Delete uniques in array
const btnDeleteUniques = document.getElementById('btnDeleteUniques');
const inputDeleteUniques = document.getElementById('inputDeleteUniques');
const pDeleteUniques = document.getElementById('pDeleteUniques');

btnDeleteUniques.addEventListener('click',()=>{
    let valuInputDeleteUniques = inputDeleteUniques.value;
    const arrayWithRepeatData = deleteUnique(valuInputDeleteUniques);
    arrayWithRepeatData.length === 0 ? 
    pDeleteUniques.innerHTML =`${valuInputDeleteUniques} Es un texto, deben de ser numeros`:
    pDeleteUniques.innerHTML = `El vector con los datos repetidos es: [${arrayWithRepeatData}]`;
});

//Convert number in romans
const btnConvertToRomans = document.getElementById('btnConvertToRomans');
const inputConvertToRomans = document.getElementById('inputConvertToRomans');
const pConvertToRomans = document.getElementById('pConvertToRomans');

btnConvertToRomans.addEventListener('click', ()=>{
    let valueInputConvertToRomans = inputConvertToRomans.value;
    const romans = convertToRomans(valueInputConvertToRomans);
    romans === ''? 
    pConvertToRomans.innerHTML = `${valueInputConvertToRomans} es un texto, por favor ingrese un numero`:
    pConvertToRomans.innerHTML = `El numero ${valueInputConvertToRomans} en números romanos es ${romans}`;
});


