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
     console.log(resultData);
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
  const searchValue = refs.inputBtnSearch.value;
  console.log(searchValue);
  const numberPage = 1;
  const resultSearch = apiServise(searchValue, numberPage);
//  printMurkup(resultSearch)
  
}

const printMurkup = async () => {
       



  refs.printGalerry.insertAdjacentHTML('beforeend', murkup(resultSearch()) )

}



refs.form.addEventListener('submit', hendlerSubmin);
