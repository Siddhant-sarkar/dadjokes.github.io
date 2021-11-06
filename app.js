// this function is now calling to see the jokes and prepending it to the list
const getDadJokes = async ()=>{
   const config = {headers: {Accept : 'application/json'}};
   const res = await axios.get("https://icanhazdadjoke.com/",config);
   document.querySelector(".lead").innerText=res.data.joke;
}

const btn = document.querySelector("#joke");
btn.addEventListener('click',getDadJokes);