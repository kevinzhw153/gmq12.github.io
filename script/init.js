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
    var game=document.createElement("a");
    blog.innerHTML="<i class='fa fa-book'></i>博客";
    blog.href="https://gmq12.github.io/";
    nav.appendChild(blog);
    learn.innerHTML="<i class='fa fa-pencil'></i>学习";
    learn.href="https://gmq12.github.io/learn/";
    nav.appendChild(learn);
    game.innerHTML="<i class='fa fa-gamepad'></i>游戏";
    nav.appendChild(game);
}
function createRight() {
    /**************** 头像+名字 ****************/
    var right=document.getElementById("right");
    var profile=document.createElement("div");
    var image=document.createElement("img");
    var myname=document.createElement("p");
    var aboutme=document.createElement("a");
    image.src="https://gmq12.github.io/image/icon.png";
    image.style.width="80%";
    image.style.height="80%";
    image.id="avatar";
    aboutme.innerHTML="<i class='fa fa-user'></i>gmq12";
    aboutme.href="https://gmq12.github.io/about/me/";
    myname.id="myname";
    myname.appendChild(aboutme);
    profile.classList.add("card");
    profile.appendChild(image);
    profile.appendChild(myname);
    right.appendChild(profile);
    /**************** 友链 ****************/
    var link=document.createElement("div");
    var title=document.createElement("p");
    var zxp=document.createElement("p");
    var zhw=document.createElement("p");
    link.classList.add("card");
    title.classList.add("center");
    title.innerHTML="<i class='fa fa-users'></i>友链："
    zxp.classList.add("center");
    zxp.innerHTML="<a href='https://zxp2019.github.io/'>zxp_oistream</a>";
    zhw.classList.add("center");
    zhw.innerHTML="<a href='https://kevinzhw153.github.io/'>kevinzhw</a>"
    link.appendChild(title);
    link.appendChild(zxp);
    link.appendChild(zhw);
    right.appendChild(link);
}
function createFooter() {
    var footer=document.getElementById("footer");
    var foot=document.createElement("div");
    foot.classList.add("card");
    var text=document.createElement("p");
    text.innerHTML="By 2020 (&copyright;) gmq12 | 联系我:<a href='mailto:gmq14159@gmail.com' class='footerlink'>gmq14159@gmail.com</a>"
    text.classList+="center small";
    foot.appendChild(text);
    footer.appendChild(foot);
}
createHeading();
createNavigator();
createRight();
createFooter();