// key:: 23145424-17de0e2191faefedd106abc58
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ


// export default





// export const apiServise = async ({search, numberPage })=> {
//    e.preventDefault()
//   try {
//     const search = dog;
//     const numberPage = 2;
//         const requestData= await   fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=12&key=23145424-17de0e2191faefedd106abc58`)
//         const resultRequestData = await requestData.json();
//         console.log(resultRequestData);
//       } catch (error) {
//         alert({
//              text: 'А что так можно Было!!!'
//         });
        
//       }
     
// }

export default function apiServise() {
   e.preventDefault()
    const search = "dog";
    const numberPage = "1";
fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=12&key=23145424-17de0e2191faefedd106abc58`)
      .then(response => {
       
        return response.json();
      })
        .then(data => console.log(data))
   
      .catch(error => {
         console.log(error,"Немає данних для відправки"); 
      });
}
apiServise();