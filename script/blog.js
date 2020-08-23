var article = {
    "blog":[
        {
            "name":"博客/测试",
            "link":"https://gmq12.github.io/blog/test/",
            "tag":["测试"]
        },
        {
            "name":"一些有用的网站",
            "link":"https://gmq12.github.io/blog/some-useful-websites/",
            "tag":["推荐","网站"]
        }
    ],
    "learn":[]
};
var blog=article.blog;
function showBlogTitle() {
    var left=document.getElementById("left");
    for(var i=blog.length-1;i >= 0;i--) {
        var div=document.createElement("div");
        div.classList+="card article";
        var title=document.createElement("p");
        title.style.fontSize="2em";
        title.style.textAlign="center";
        title.innerHTML="<a href='"+blog[i].link+"' style='text-decoration:none;color:#2c2c6c;'>"+blog[i].name+"</a>";
        div.appendChild(title);
        var subtitle=document.createElement("p");
        subtitle.innerHTML="under "+blog[i].tag;
        subtitle.classList+="fblue";
        subtitle.style.textAlign="center";
        div.appendChild(subtitle);
        left.appendChild(div);
    }
}
function showBlogTitleByTagName(tagname) {
    if(tagname=="") {
        showBlogTitle();
        return;
    }
    var left=document.getElementById("left");
    for(var i=blog.length-1;i >= 0;i--) {
        var b=false;
        for(var j=0;j < blog[i].tag.length;j++) {
            if(tagname==blog[i].tag[j]) {
                b=true;
                break;
            }
        }
        if(!b) continue;
        var div=document.createElement("div");
        div.classList+="card article";
        var title=document.createElement("p");
        title.style.fontSize="2em";
        title.style.textAlign="center";
        title.innerHTML="<a href='"+blog[i].link+"' style='text-decoration:none;color:#2c2c6c;'>"+blog[i].name+"</a>";
        div.appendChild(title);
        var subtitle=document.createElement("p");
        subtitle.innerHTML="under "+blog[i].tag;
        subtitle.classList+="fblue";
        subtitle.style.textAlign="center";
        div.appendChild(subtitle);
        left.appendChild(div);
    }
    console.log("create successfully");
}
function removeArticleTitle() {
    var left=document.getElementById("left");
    var s=document.getElementsByClassName("article");
    while(s[0]) {
        left.removeChild(s[0]);
        s=document.getElementsByClassName("article");
    }
}