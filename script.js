let likes = Number(localStorage.getItem("likes")) || 0;
let dislikes = Number(localStorage.getItem("dislikes")) || 0;

document.getElementById("likes").innerText = likes;
document.getElementById("dislikes").innerText = dislikes;

let voto = localStorage.getItem("voto") || "";

document.getElementById("likeBtn").addEventListener("click",()=>{

if(voto === "like") return;

if(voto === "dislike"){
dislikes--;
}

likes++;

voto = "like";

atualizar();
});

document.getElementById("dislikeBtn").addEventListener("click",()=>{

if(voto === "dislike") return;

if(voto === "like"){
likes--;
}

dislikes++;

voto = "dislike";

atualizar();
});

function atualizar(){
document.getElementById("likes").innerText = likes;
document.getElementById("dislikes").innerText = dislikes;

localStorage.setItem("likes",likes);
localStorage.setItem("dislikes",dislikes);
localStorage.setItem("voto",voto);
}

let comentarios =
JSON.parse(localStorage.getItem("comentarios")) || [];

mostrarComentarios();

function adicionarComentario(){

let input =
document.getElementById("comentarioInput");

let texto = input.value.trim();

if(texto === "") return;

comentarios.push(texto);

localStorage.setItem(
"comentarios",
JSON.stringify(comentarios)
);

input.value = "";

mostrarComentarios();
}

function mostrarComentarios(){

const lista =
document.getElementById("listaComentarios");

lista.innerHTML = "";

comentarios.forEach(comentario=>{

const li =
document.createElement("li");

li.textContent = comentario;

lista.appendChild(li);
});
}

function aumentarFonte(){
document.body.style.fontSize="20px";
}

function diminuirFonte(){
document.body.style.fontSize="14px";
}

function alternarContraste(){
document.body.classList.toggle(
"alto-contraste"
);
}

function lerPagina(){

const texto =
document.body.innerText;

const fala =
new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";

speechSynthesis.speak(fala);
}

document.getElementById("topo")
.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Poppins',sans-serif;
background:#fafafa;
color:#333;
}

header{
background:white;
padding:25px;
text-align:center;
position:sticky;
top:0;
z-index:1000;
box-shadow:0 2px 10px rgba(0,0,0,.1);
}

header h1{
font-family:'Permanent Marker';
font-size:50px;
}

nav{
margin-top:15px;
}

nav a{
margin:15px;
text-decoration:none;
color:black;
font-weight:600;
}

.banner{
text-align:center;
padding:30px;
}

.banner img{
width:350px;
border-radius:15px;
}

.banner h2{
font-size:60px;
margin-top:20px;
}

.container{
max-width:1100px;
margin:auto;
padding:20px;
}

.card{
background:white;
padding:30px;
margin-bottom:25px;
border-radius:15px;
box-shadow:0 0 15px rgba(0,0,0,.1);
}

.card h2{
margin-bottom:15px;
}

.galeria{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
}

.galeria img{
width:100%;
border-radius:10px;
}

.reacoes{
margin-top:20px;
}

.reacoes button{
padding:10px;
cursor:pointer;
margin-right:10px;
}

.comentarios{
margin-top:25px;
}

.comentarios input{
width:70%;
padding:10px;
}

.comentarios button{
padding:10px;
}

.comentarios li{
margin-top:10px;
list-style:none;
}

.acessibilidade{
text-align:center;
margin:20px;
}

.acessibilidade button{
padding:10px;
margin:5px;
}

.alto-contraste{
background:black;
color:white;
}

#topo{
position:fixed;
bottom:20px;
right:20px;
padding:15px;
border:none;
border-radius:50%;
cursor:pointer;
}
