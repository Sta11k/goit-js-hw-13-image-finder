import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
// import apiServise from "./api/apiService";
import murkup from "./tamplates/murkup.hbs"
// import search from "./tamplates/search.hbs"
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

// defaultModules.set(PNotifyMobile, {});

const refs = {
   form:document.querySelector("#search-form"),
  inputBtnSearch: document.querySelector(".form__input"),
  printGalerry: document.querySelector(".gallery"),
  submitBtn:document.querySelector(".form__button--submit"),
  resetBtn: document.querySelector(".form__button--reset"),
  title: document.querySelector(".title"),
  container: document.querySelector(".container"),
  loadMore: document.querySelector(".load__more"),
   containerStart:document.querySelector(".container__start"),
  
};


const apiServise = async ( searchValue, numberPage )=> {

    try {
      const submitData = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${numberPage}&per_page=12&key=23145424-17de0e2191faefedd106abc58`);
     const resultData = await submitData.json();
     
       return resultData;
     
    } catch (error) {
      return  alert({
          text: 'А что так можно было?'
      });;
    }
  //   finally {
  //     alert({
  //         text: 'Вот это поворот?'
  //     });
  //  }
}
   


const hendlerSubmin = (e) => {
  e.preventDefault()
  renderMurkupColection()
  creatLoadMoreBtn()
  
}
let numberPage = 1;
const renderMurkupColection = async () => {
   const searchValue = refs.inputBtnSearch.value;
  // console.log(searchValue);

  const requestColection = await apiServise(searchValue, numberPage);
  // console.log('requestColection ', requestColection);
  // console.log(requestColection.hits);
const arreyColection = requestColection.hits;
  printMurkup(arreyColection);
  };



function creatLoadMoreBtn() {
 
  refs.loadMore.classList.add("invisible");
  refs.containerStart.classList.add("invisible");
 }

 function printMurkup(el ) {
   refs.printGalerry.insertAdjacentHTML('beforeend', murkup(el)) 
  };
  
const resetForm = (e) => {
  refs.printGalerry.innerHTML = " "
  refs.loadMore.classList.remove("invisible")
   refs.containerStart.classList.remove("invisible")
}
 
const addNextImg = (e) => {
  numberPage+=1
  scrolElement()
}

const scrolElement = async ()=> {
  await renderMurkupColection()
  await  creatLoadMoreBtn()
  await  refs.container.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

}

const toStart = (e) => {
  refs.container.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});

}




refs.form.addEventListener('submit', hendlerSubmin);
refs.resetBtn.addEventListener('click', resetForm);
refs.loadMore.addEventListener('click', addNextImg);
refs.containerStart.addEventListener('click', toStart);