function menu_open(){
    document.getElementById('mob-menu').style.animationName="mob_open";
    document.getElementById('mob-menu').style.animationFillMode="forwards";
    document.getElementById('mob-menu').style.animationDuration=".8s";
}

function menu_close(){
    document.getElementById('mob-menu').style.animationName="mob_close";
    document.getElementById('mob-menu').style.animationFillMode="forwards";
    document.getElementById('mob-menu').style.animationDuration=".8s";
}

$(document).ready(function(){
    $(".hero-content").mouseenter(function(){
        $(".hero-content h1").css("color","White");
        $(".hero-content h1").css("text-shadow","0px 0px 20px #20bf55");
        $("header").css("background-color","white");
        $("header").css("box-shadow","0px 0px 20px #20bf55");
        $("header").css("transition",".5s");
    });

    $(".hero-content").mouseleave(function(){
        $(".hero-content h1").css("color","#20bf55");
        $(".hero-content h1").css("text-shadow","0px 0px 0px #20bf55");
        $("header").css("background-color","#20bf55");
        $("header").css("box-shadow","none");
    });

    $(".pofo-img").mouseenter(function(){
        $(this).css("border-color","white");
        $(this).css("box-shadow","0px 0px 20px #20bf55");
        $(this).css("border-width","8px");
        // $(this).css("border-radius","50px");
    });
    
    $(".pofo-img").mouseleave(function(){
        $(this).css("border-color","#20bf55");
        $(this).css("box-shadow","none");
        $(this).css("border-width","5px");
        $(this).css("border-radius","0px");
    });

    $(".skill-card").mouseenter(function(){
        $(".skill-card p").css("color","#fff");
        $(".skill-card p").css("transition",".5s");        
    })

    $(".skill-card").mouseleave(function(){
        $(".skill-card p").css("color","#20bf55");
    })
});

// Cursor 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


//Preloader

var loader=document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display="none";
})

