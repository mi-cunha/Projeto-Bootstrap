$(document).ready(function(){

    // progressbar
    let containerA = document.getElementById("circleA")
    let circleA = new ProgressBar.Circle(containerA, {
        color: "#6dd5ed",
        strokeWidth: 8,
        duration: 1200,
        from: {color:"#D9D8D7"},
        to: {color: "#2193b0"},

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value()*60)

            circle.setText(value);

        }
    });

    let containerB = document.getElementById("circleB")
    let circleB = new ProgressBar.Circle(containerB, {
        color: "#6dd5ed",
        strokeWidth: 8,
        duration: 1700,
        from: {color:"#D9D8D7"},
        to: {color: "#2193b0"},

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value() * 15648)

            circle.setText(value);

        }
    });

    let containerC = document.getElementById("circleC")
    let circleC = new ProgressBar.Circle(containerC, {
        color: "#6dd5ed",
        strokeWidth: 8,
        duration: 1200,
        from: {color:"#D9D8D7"},
        to: {color: "#2193b0"},

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value() * 56)

            circle.setText(value);

        }
    });

    let containerD = document.getElementById("circleD")
    let circleD = new ProgressBar.Circle(containerD, {
        color: "#6dd5ed",
        strokeWidth: 8,
        duration: 1400,
        from: {color:"#D9D8D7"},
        to: {color: "#2193b0"},

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value() * 900)

            circle.setText(value);

        }
    });

    // inicia a animação quando o usuário chega até ele
    // Progress bar
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();
        if (scroll > (dataAreaOffset.top - 500) && stop == 0){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    // Parallax

    setTimeout(function() {

        $("#data-area").parallax({imageSrc: "img/fundo-parallax.jpg"});

        $("#apply-area").parallax({imageSrc: "img/parallax-opcao2.jpg"});

    }, 250);

        // Filtro do portfolio

        $(".filter-btn").on("click", function(){
            let type = $(this).attr("id");
            let boxes = $(".project-box");
    
            $(".main-btn").removeClass("active");
            $(this).addClass("active");
    
            if(type == "cardapio-btn"){
                eachBoxes("cardapio", boxes)
            }  else if (type == "eventos-btn"){
                eachBoxes("cardapio", boxes)
            } else if(type == "vibes-btn"){
                eachBoxes("vibes", boxes)
            } else{
                eachBoxes("cardapio", boxes)
            }
                    
        });

        function eachBoxes(type, boxes){
            if(type == "cardapio"){
                $(boxes).fadeIn();
            } else{
                $(boxes).each(function(){
                    if(!$(this).hasClass(type)){
                        $(this).fadeOut("slow");
                    } else {
                        $(this).fadeIn();
                    }
                });
            }
        }
    

});


