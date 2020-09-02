export function ls_SET(favorites) {
  localStorage.setItem("favList", JSON.stringify(favorites));
}

export function ls_GET() {
  const favList = localStorage.getItem("favList");
  const liked = favList ? JSON.parse(favList) : [];
  return Array.from(liked);
}
