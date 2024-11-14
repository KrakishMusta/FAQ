const asideList = document.querySelector('.aside-list');
var visibleHUD = false;

var updateAsideListVisibility = function () {
    const drob = window.screen.width / window.screen.height;
    asideList.style.display = drob < 1 ? "none" : "block";
    if(drob < 1)
    {
        const mainElement = document.querySelector('main');
        let div = document.createElement("div");
        div.addEventListener("click", function displayChange() 
        {
            asideList.style.display = asideList.style.display === "none" ? "block" : "none";
        });
        div.addEventListener("click", function burgerChange() 
        {
            if(!visibleHUD)
            {
                visibleHUD = true;
                div.innerHTML = "";
                div.style.justifyContent = "space-around";

                let span1 = document.createElement("span");
                span1.style.width = "30px";
                span1.style.height = "3px";
                span1.style.backgroundColor = "black";
                span1.style.position = "absolute";
                span1.style.transform = "rotate(45deg)";
                div.append(span1);

                let span2 = document.createElement("span");
                span2.style.width = "30px";
                span2.style.height = "3px";
                span2.style.backgroundColor = "black";
                span2.style.position = "absolute";
                span2.style.transform = "rotate(-45deg)";
                div.append(span2);
            }
            else
            {
                visibleHUD = false;
                div.innerHTML = "";
                div.style.justifyContent = "space-between";

                let span1 = document.createElement("span");
                span1.style.width = "30px";
                span1.style.height = "3px";
                span1.style.backgroundColor = "black";
                div.append(span1);

                let span2 = document.createElement("span");
                span2.style.width = "30px";
                span2.style.height = "3px";
                span2.style.backgroundColor = "black";
                div.append(span2);

                let span3 = document.createElement("span");
                span3.style.width = "30px";
                span3.style.height = "3px";
                span3.style.backgroundColor = "black";
                div.append(span3);
            }
        });

        div.style.width = "30px";
        div.style.top = "5px";
        div.style.right = "5px";
        div.style.height = "30px";
        div.style.position = "fixed";
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.style.justifyContent = "space-between";
        div.style.cursor = "pointer";
        div.id = "burger";

        let span1 = document.createElement("span");
        span1.style.width = "30px";
        span1.style.height = "3px";
        span1.style.backgroundColor = "black";
        div.append(span1);

        let span2 = document.createElement("span");
        span2.style.width = "30px";
        span2.style.height = "3px";
        span2.style.backgroundColor = "black";
        div.append(span2);

        let span3 = document.createElement("span");
        span3.style.width = "30px";
        span3.style.height = "3px";
        span3.style.backgroundColor = "black";
        div.append(span3);

        mainElement.prepend(div);
    }
};
updateAsideListVisibility();