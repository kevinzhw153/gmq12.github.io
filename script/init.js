function createHeading() {
    var heading=document.getElementById("heading");
    var title=document.createElement("h1");
    var linktitle=document.createElement("a");
    linktitle.innerHTML="gmq12 的博客";
    title.appendChild(linktitle);
    heading.appendChild(title);
    title.style.textAlign="center";
    linktitle.id="title";
    linktitle.setAttribute("href",".");
}
function createNavigator() {
    var nav=document.getElementById("nav");
    var blog=document.createElement("a");
    var learn=document.createElement("a");
    blog.innerHTML="<i class='fa fa-book'></i>博客";
    nav.appendChild(blog);
    learn.innerHTML="<i class='fa fa-pencil'></i>学习";
    nav.appendChild(learn);
}
function createRight() {
    var right=document.getElementById("right");
    var profile=document.createElement("div");
    var image=document.createElement("img");
    var myname=document.createElement("p");
    image.src="./image/icon.png";
    image.id="avatar";
    myname.innerHTML="gmq12";
    myname.id="myname";
    profile.classList.add("card");
    profile.appendChild(image);
    profile.appendChild(myname);
    right.appendChild(profile);
}
createHeading();
createNavigator();
createRight();