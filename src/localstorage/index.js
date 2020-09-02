export function ls_SET(team) {
  let liked = [];
  liked = ls_GET();
  liked.push(team);
  localStorage.setItem("favList", JSON.stringify(liked));
  console.log("liked!!", team);
}

export function ls_GET() {
  const favList = localStorage.getItem("favList");
  const liked = favList ? JSON.parse(favList) : [];
  console.log("favouuuurites!", liked);
  return Array.from(liked);
}

export function ls_REMOVE() {
    const favList = localStorage.getItem("favList");
    const liked = favList ? JSON.parse(favList) : [];
    console.log("favouuuurites!", liked, Array.from(liked));
    return Array.from(liked);
  }
  
  export function ls_CHECK(){
      const isLocalStorage = localStorage.getItem("favList")
      if(!isLocalStorage || isLocalStorage.length < 1) return false
      return true
  }