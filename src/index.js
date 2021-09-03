import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import apiServise from "./api/apiService";
// import murkup from "./tamplates/murkup.hbs"
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
   const search = dog;
    const numberPage = 2;


//  const apiServise = async ({search, numberPage })=> {
//    e.preventDefault()
  
 
//         const requestData= await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=12&key=23145424-17de0e2191faefedd106abc58`)
//         const resultRequestData = await requestData.json();
//         console.log(resultRequestData);
//         //   alert({
//         //      text: 'А что так можно Было!!!'
//         // });
        
      
// }

// console.log(apiServise(dog,2));
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
