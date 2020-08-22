var blog=[
    ["一些有用的网站","https://gmq12.github.io/blog/some-useful-websites/","分享"],
    ["博客/测试","https://gmq12.github.io/blog/test/","测试"]
]
function showBlogTitle() {
    var left=document.getElementById("left");
    for(var i=0;i < blog.length;i++) {
        var div=document.createElement("div");
        div.classList+="card";
        var title=document.createElement("p");
        title.style.fontSize="2em";
        title.style.textAlign="center";
        title.innerHTML="<a href='"+blog[i][1]+"' style='text-decoration:none;color:#2c2c6c;'>"+blog[i][0]+"</a>";
        div.appendChild(title);
        var subtitle=document.createElement("p");
        subtitle.innerHTML="under "+blog[i][2];
        subtitle.classList+="fblue";
        subtitle.style.textAlign="center";
        div.appendChild(subtitle);
        left.appendChild(div);
    }
}