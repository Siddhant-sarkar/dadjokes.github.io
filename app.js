// this function is now calling to see the jokes and prepending it to the list
const getDadJokes = async ()=>{
   const config = {headers: {Accept : 'application/json'}};
   const res = await axios.get("https://icanhazdadjoke.com/",config);
   let k = document.createElement("li");
   k.innerText=res.data.joke;
   document.querySelector('ul').prepend(k);
}

const btn = document.querySelector("#get");
btn.addEventListener('click',getDadJokes);