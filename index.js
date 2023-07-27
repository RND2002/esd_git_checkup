async function logSpells(){
    try{
        const response=await fetch("https://harry-potter-api-en.onrender.com/spells");
        const spells=await response.json();
        console.log(spells);

    }catch(e){
        console.log(e);
    }
}

logSpells();

https://harry-potter-api-en.onrender.com/spells"
async function logMovies() {
    const response = await fetch("https://harry-potter-api-en.onrender.com/spells");
    const movies = await response.json();
    console.log(movies);
  }
  