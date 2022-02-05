
const video1 = document.getElementById('video');
let button = document.querySelectorAll('.btn');
let btnArr = Array.from(button);
let card = document.querySelectorAll('.movieBtn');
//array med objekt
let btnVideo = [
    {
      id:'but1',
      img: src="bild/hund1.jpg" ,
      press:'console.log("but1")'
    },
      {
        id:'but2',
        img: src="bild/hund2.jpg" ,
      press:'console.log("but2)'
    },
   {
        id:'but3',
        img: src="bild/hund3.jpg" ,
      press:'console.log("but3")'
    }]
 
video1.addEventListener('click', runEvent);

function runEvent(e){
    console.log (`hi : ${e.type}`);
    video1.setAttribute = (e.target.id); 
}
button.forEach(button =>
    button.addEventListener('click',(event)=>{
        let btnArr = Array.from(button);
    }
      btnArr.forEach(function,(){
        console.log("du clickade på  " + event.target.id)
        console.log(btnArr)
      })
        

        //en function som kopplar ihop clickad id med objekt id i array
   
  
       
    )
    )


    













