// key:: 23145424-17de0e2191faefedd106abc58
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
export default function apiServise() {
    const search = "dog";
    const numberPage = "1";
fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=12&key=23145424-17de0e2191faefedd106abc58`)
      .then(response => {
       
        return response.json();
      })
        .then(data => {
         maxCantry(data)
        })
   
      .catch(error => {
         console.log(error,"Немає данних для відправки"); 
      });
}
