import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import apiServise from "./api/apiService";

import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

// defaultModules.set(PNotifyMobile, {});

const refs = {
   form:document.querySelector("#search-form"),
  inputSearch: document.querySelector(".form__input"),
  printGalerry: document.querySelector(".gallery"),
  submitBtn:document.querySelector(".form__button--submit"),
  resetBtn: document.querySelector(".form__button--reset"),
};

alert({
  text: 'Атата'
});


// const searBtnchImg = e => {
  
// }

const hendlerSubmin = (e) => {
  e.preventDefault()
  apiServise()
  // const value = refs.inputSearch.value

  //   fetch(`https://restcountries.eu/rest/v2/name/${value}`)
  //     .then(response => {
       
  //       return response.json();
  //     })
  //       .then(data => {
  //        maxCantry(data)
  //       })
   
  //     .catch(error => {
  //        console.log(error,"Немає данних для відправки"); 
  //     });
}

refs.form.addEventListener('submit', hendlerSubmin);
