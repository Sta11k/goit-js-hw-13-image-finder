import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
// import apiServise from "./api/apiService";
 import murkup from "./tamplates/murkup.hbs"
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

// defaultModules.set(PNotifyMobile, {});

const refs = {
   form:document.querySelector("#search-form"),
  inputBtnSearch: document.querySelector(".form__input"),
  printGalerry: document.querySelector(".gallery"),
  submitBtn:document.querySelector(".form__button--submit"),
  resetBtn: document.querySelector(".form__button--reset"),
};

// alert({
//   text: 'Атата'
// });
  


const apiServise = async ( searchValue, numberPage )=> {

    try {
      const submitData = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${numberPage}&per_page=12&key=23145424-17de0e2191faefedd106abc58`);
     const resultData = await submitData.json();
     
       return resultData;
     
    } catch (error) {
      return "Error";
    } finally {
      alert({
          text: 'А что так можно было?'
      });
   }
}
   


const hendlerSubmin = (e) => {
  e.preventDefault()
  renderMurkupColection()
  // const searchValue = refs.inputBtnSearch.value;
  // console.log(searchValue);
  // const numberPage = 1;
  // const resultData =  apiServise(searchValue, numberPage);

  // printMurkup(renderColection) 

}

const renderMurkupColection = async () => {
   const searchValue = refs.inputBtnSearch.value;
  console.log(searchValue);
  const numberPage = 1;
  const requestColection = await apiServise(searchValue, numberPage);
  console.log('requestColection ', requestColection);
  console.log(requestColection.hits);
const arreyColection = requestColection.hits;
  printMurkup(arreyColection);
  
  // renderColection(arreyColection);
  
  // const promises = requestColection.map(el => el);
  // const resultPromis = await Promise.resolve(requestColection);
  // return resultPromis;
  // const    renderColection= ({ requestColection })=>{
  // // arrey.forEach(el => printMurkup(el));
  // const trabl = requestColection.forEach(el => el);
  // return trabl;
// };
// console.log(renderColection());
  // const promises = requestColection.forEach(el => el);
  
  // const keys = Object.entries(requestColection);
  // const aaaa = () => keys.map(el => el);

  };

// const resultRendering = renderMurkupColection();
// resultRendering.then(resultPromis => renderColection(resultPromis)).catch(console.error());

// function renderColection( hits ){
//   arrey.forEach(el => printMurkup(el));
// // arrey.forEach(el => console.log(el));
// };


 function printMurkup(el ) {
   
    refs.printGalerry.insertAdjacentHTML('beforeend', murkup(el)) 
  };
  




refs.form.addEventListener('submit', hendlerSubmin);
