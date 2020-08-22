function createHeading() {
    var heading=document.getElementById("heading");
    var title=document.createElement("h1");
    var linktitle=document.createElement("a");
    linktitle.innerHTML="gmq12 的博客";
    title.appendChild(linktitle);
    heading.appendChild(title);
    title.style.textAlign="center";
    linktitle.id="title";
    linktitle.href="https://gmq12.github.io/";
}
function createNavigator() {
    var nav=document.getElementById("nav");
    var blog=document.createElement("a");
    var learn=document.createElement("a");
    blog.innerHTML="<i class='fa fa-book'></i>博客";
    blog.href="https://gmq12.github.io/";
    nav.appendChild(blog);
    learn.innerHTML="<i class='fa fa-pencil'></i>学习";
    nav.appendChild(learn);
}
function createRight() {
    var right=document.getElementById("right");
    var profile=document.createElement("div");
    var image=document.createElement("img");
    var myname=document.createElement("p");
    image.src="https://gmq12.github.io/image/icon.png";
    image.id="avatar";
    myname.innerHTML="gmq12";
    myname.id="myname";
    profile.classList.add("card");
    profile.appendChild(image);
    profile.appendChild(myname);
    right.appendChild(profile);
}
function createFooter() {
    var footer=document.getElementById("footer");
    var foot=document.createElement("div");
    foot.classList+="card";
    var text=document.createElement("p");
    text.innerHTML="By 2020 gmq12 | 联系我:<a href='mailto:gmq14159@gmail.com' class='footerlink'>gmq14159@gmail.com</a>"
    text.classList+="center small";
    foot.appendChild(text);
    footer.appendChild(foot);
}
createHeading();
createNavigator();
createRight();
createFooter();