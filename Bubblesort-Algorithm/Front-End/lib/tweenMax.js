var scrollPage;
var intro = new TimelineMax();
var loopVapor = new TimelineMax({ repeat: -1 });
var loopVapor2 = new TimelineMax({ repeat: -1 });
var ripple = new TimelineMax({ repeat: -1 });
var loopScroll = new TimelineMax({ repeat: -1, delay: 6 });
var scrollmolienda = $.superscrollorama();
var fullW = $(window).width();
var fullH = $(window).height();
var marginT = fullH / 7;
var full = 0;

$(function() {
    // Stuff to do as soon as the DOM is ready;
});

function vapor() {
    TweenMax.to('#section_3 .vapor_2', 4, { top: -100 });

}

$(function() {
    $('.frijoles .container').css({ marginTop: marginT * 0.4 });
    $('#section_1 .container').css({ marginTop: marginT * 0.4 });
    scrollmolienda.addTween(900, TweenMax.from($('#header .logo'), 0.6, { marginTop: "-200px" }), 0, 1);

    function plaxS2() {
        //    $('#section_2 .chorro').plaxify({"xRange":20,"yRange":100});
        //    $('#section_2 .vapor_1').plaxify({"xRange":20,"yRange":20});
        //    $('#section_2 .vapor_2').plaxify({"xRange":20,"yRange":100, "invert":true});
        // $.plax.enable({ "activityTarget": $('body')});
    }


    function sectionsLoad() {

        $('#main').append('<div id="section_2" class="section"><div class="container"><div class="cont_cuerpo"><div class="c letras"></div><div class="u letras"></div><div class="e letras"></div><div class="r letras"></div><div class="p letras"></div><div class="o letras"></div></div><div class="intenso"><img src="img/cuerpo/molienda-cuerpo-subtitulo.png" alt=""></div><div class="observar"><img src="img/cuerpo/molienda-cuerpo-texto-01.png" alt=""></div><div class="turbidez"><img src="img/cuerpo/molienda-cuerpo-texto-02.png" alt=""></div><div class="presenta"><img src="img/cuerpo/molienda-cuerpo-texto-03.png" alt=""><br><img src="img/cuerpo/molienda-cuerpo-texto-04.png"></div><div class="cont_vapor"><div class="vapor_1 draggable"></div><div class="chorro draggable"></div><div class="vapor_2 draggable"></div></div><a href="javascript:void(null);" class="scroll"><br><img src="img/cuerpo/molienda-cuerpo-texto-scroll.png" alt=""></a></div></div><div id="section_4" class="section"><div class="cont_cafe"><div class="capa1 capa draggable"></div><div class="capa2 capa draggable"></div><div class="capa3 capa draggable"></div><div class="gotas"></div></div><div class="container"><div class="cont_sabor"><div class="s letras"></div><div class="a letras"></div><div class="b letras"></div><div class="o letras"></div><div class="r letras"></div></div><div class="molienda"><img src="img/sabor/molienda-sabor-subtitulo.png" alt=""></div><div class="mantener"><img src="img/sabor/molienda-sabor-texto-01.png" alt=""><br><img src="img/sabor/molienda-sabor-texto-02.png" alt=""></div><div class="percibir"><img src="img/sabor/molienda-sabor-texto-03.png" alt=""></div><div class="robusta"><img src="img/sabor/molienda-sabor-texto-04.png" alt=""></div><div class="caramelo"><img src="img/sabor/molienda-sabor-texto-05.png" alt=""></div><a href="javascript:void(null);" class="recetas"><br><img src="img/sabor/molienda-sabor-ver-recetas.png" alt=""></a></div></div><div id="section_3" class="section"><div class="container"><div class="cont_aroma"><div class="a letras"></div><div class="r letras"></div><div class="o letras"></div><div class="m letras"></div><div class="a_ letras"></div></div><div class="olfato"><img src="img/aroma/molienda-aroma-subtitulo.png" alt=""></div><div class="prepara"><img src="img/aroma/molienda-aroma-texto-01.png" alt=""></div><div class="cierra"><img src="img/aroma/molienda-aroma-texto-02.png" alt=""></div><div class="aroma"><img src="img/aroma/molienda-aroma-texto-03.png" alt=""></div><div class="vapor_1 draggable"></div><div class="vapor_2 draggable"></div><a href="javascript:void(null);" class="scroll"><br><img src="img/aroma/molienda-aroma-texto-scroll.png"></a></div></div><div id="section_5" class=""><div class="cont_recetas draggable"><div class="receta receta_1"><p class="titulo">POR LA MAÑANA</p><div class="cont_recetas_copys"><img src="img/recetas/porlamanana/molienda-recetas-titulo01.png" class="nombre_1" alt=""><br><img src="img/recetas/porlamanana/molienda-recetas-titulo02.png" class="nombre_2" alt=""><br><img src="img/recetas/texto-generico.png" class="copy" alt=""></div></div><div class="receta receta_2"><p class="titulo">A MEDIA MAÑANA</p><div class="cont_recetas_copys"><img src="img/recetas/amediamanana/molienda-recetas-titulo01.png" class="nombre_1" alt=""><br><img src="img/recetas/amediamanana/molienda-recetas-titulo02.png" class="nombre_2" alt=""><br><img src="img/recetas/texto-generico.png" class="copy" alt=""></div></div><div class="receta receta_3"><p class="titulo">EN LA COMIDA</p><div class="cont_recetas_copys"><img src="img/recetas/enlacomida/molienda-recetas-titulo01.png" class="nombre_1" alt=""><br><img src="img/recetas/enlacomida/molienda-recetas-titulo02.png" class="nombre_2" alt=""><br><img src="img/recetas/texto-generico.png" class="copy" alt=""></div></div><div class="receta receta_4"><p class="titulo">A MEDIA TARDE</p><div class="cont_recetas_copys"><img src="img/recetas/amediatarde/molienda-recetas-titulo.png" class="nombre_1" alt=""><br><img src="img/recetas/texto-generico.png" class="copy" alt=""></div></div><div class="receta receta_5"><p class="titulo">EN LA NOCHE</p><div class="cont_recetas_copys"><img src="img/recetas/enlanoche/molienda-recetas-titulo01.png" class="nombre_1" alt=""><br><img src="img/recetas/enlanoche/molienda-recetas-titulo02.png" class="nombre_2" alt=""><br><img src="img/recetas/texto-generico.png" class="copy" alt=""></div></div><p class="titulo_recetas">RECETARIO</p></div></div>').height(5420);
        // $('.container').css({marginTop: marginT});
        $('.cont_cuerpo').css({ paddingTop: marginT * 1.6 });
        $('.cont_cuerpo .letras').css({ top: marginT * 1.6 });
        $('.cont_aroma').css({ paddingTop: marginT * 2 });
        $('.cont_aroma .letras').css({ top: marginT * 2 });
        $('.cont_sabor').css({ paddingTop: marginT * 1.4 });
        $('.cont_sabor .letras').css({ top: marginT * 1.4 });
        $('.cont_recetas .titulo').css({ top: marginT * 5 });
        $('.cont_recetas .nombre_1').css({ paddingTop: marginT * 2 });
        // $('.nombre_1').pixastic("blurfast", {amount:0.9})

        $('.bean_1').plaxify({ "xRange": 80, "yRange": 40 });
        $('.bean_2').plaxify({ "xRange": 40, "yRange": 20 });
        $('.bean_3').plaxify({ "xRange": 20, "yRange": 10 });
        $('.bean_4').plaxify({ "xRange": 80, "yRange": 40, "invert": true });
        $('.bean_5').plaxify({ "xRange": 80, "yRange": 40 });
        $('.bean_6').plaxify({ "xRange": 40, "yRange": 20 });
        $('.bean_7').plaxify({ "xRange": 20, "yRange": 10 });
        $('.bean_8').plaxify({ "xRange": 80, "yRange": 10 });
        // 
        // $('.nombre_1').plaxify({"xRange":20,"yRange":20});
        // $('.nombre_2').plaxify({"xRange":20,"yRange":20, "invert": true});
        // $('.copy').plaxify({"xRange":10,"yRange":10, "invert": true});

        // $('.capa1').plaxify({"xRange":40,"yRange":10});
        // $('.capa2').plaxify({"xRange":20,"yRange":10});
        // $('.capa3').plaxify({"xRange":20,"yRange":10, "invert": true});
        // 

        // $('#section_2 .chorro').plaxify({"xRange":20,"yRange":100});
        // $('#section_2 .vapor_1').plaxify({"xRange":20,"yRange":20});
        // $('#section_2 .vapor_2').plaxify({"xRange":20,"yRange":100, "invert":true});
        // $('#section_3 .vapor_1').plaxify({"xRange":20});
        // $('#section_3 .vapor_2').plaxify({"xRange":20, "invert":true});
        $.plax.enable({ "activityTarget": $('body') });
        scrollmolienda.addTween(0, TweenMax.to($('#section_2'), 1, { top: 0 }), 1084, 1);
        scrollmolienda.addTween(200, TweenMax.from($('#section_2 .c'), 0.6, { top: "-80px" }), 600, 1);
        scrollmolienda.addTween(200, TweenMax.from($('#section_2 .u'), 0.6, { top: "80px" }), 600, 1);
        scrollmolienda.addTween(200, TweenMax.from($('#section_2 .e'), 0.6, { top: "-60px" }), 600, 1);
        scrollmolienda.addTween(200, TweenMax.from($('#section_2 .r'), 0.6, { top: "60px" }), 600, 1);
        scrollmolienda.addTween(200, TweenMax.from($('#section_2 .p'), 0.6, { top: "-40px" }), 600, 1);
        scrollmolienda.addTween(200, TweenMax.from($('#section_2 .o'), 0.6, { top: "40px" }), 600, 1);
        scrollmolienda.addTween(1, TweenMax.from($('#section_2 .chorro'), 0.4, { top: "-800px", left: 609 }), 1084, 1);
        scrollmolienda.addTween(100, TweenMax.from($('#section_2 .vapor_2'), 1, { top: "400px" }), 1084, 1);
        scrollmolienda.addTween(100, TweenMax.from($('#section_2 .vapor_1'), 1, { top: "50px" }), 1084, 1);
        scrollmolienda.addTween(600, TweenMax.from($('#section_2 .intenso'), 0.6, { paddingRight: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(650, TweenMax.from($('#section_2 .observar'), 0.6, { paddingLeft: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(700, TweenMax.from($('#section_2 .turbidez'), 0.6, { paddingRight: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(750, TweenMax.from($('#section_2 .presenta'), 0.6, { paddingLeft: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(800, TweenMax.from($('#section_2 .scroll'), 0.6, { autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(2, TweenMax.to($('.frijoles .scroll'), 0.6, { autoAlpha: 0 }), 150, 1);

        scrollmolienda.addTween(80, TweenMax.to($('.frijoles .bean_8'), 1, { marginTop: "1200px" }), 1200, 1);
        scrollmolienda.addTween(110, TweenMax.to($('.frijoles .bean_7'), 1, { marginTop: "1400px" }), 1200, 1);
        scrollmolienda.addTween(20, TweenMax.to($('.frijoles .bean_6'), 1, { marginTop: "1200px" }), 1200, 1);
        scrollmolienda.addTween(50, TweenMax.to($('.frijoles .bean_5'), 1, { marginTop: "1400px" }), 1200, 1);
        scrollmolienda.addTween(1, TweenMax.to($('.frijoles .bean_4'), 1, { marginTop: "1200px" }), 1200, 1);
        scrollmolienda.addTween(30, TweenMax.to($('.frijoles .bean_3'), 1, { marginTop: "1400px" }), 1200, 1);
        scrollmolienda.addTween(60, TweenMax.to($('.frijoles .bean_2'), 1, { marginTop: "1200px" }), 1200, 1);
        scrollmolienda.addTween(90, TweenMax.to($('.frijoles .bean_1'), 1, { marginTop: "1400px" }), 1200, 1);

        scrollmolienda.addTween(900, TweenMax.to($('.frijoles'), 1, { autoAlpha: 0, onComplete: plaxS2 }), 0, 1);

        scrollmolienda.addTween(1090, TweenMax.to($('#section_3'), 1, { top: 0 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_4'), 1, { top: 0 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_cuerpo .c'), 1, { top: 600 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_cuerpo .u'), 1, { top: -500 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_cuerpo .e'), 1, { top: 400 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_cuerpo .r'), 1, { top: -200 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_cuerpo .p'), 1, { top: 700 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_cuerpo .o'), 1, { top: -1500 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_cuerpo'), 1, { paddingTop: 1084 }), 1084, 1);
        scrollmolienda.addTween(1090, TweenMax.to($('#section_2 .cont_vapor'), 1, { top: -200 }), 1084, 1);

        scrollmolienda.addTween(1300, TweenMax.from($('#section_3 .a'), 0.6, { top: "-280px" }), 600, 1);
        scrollmolienda.addTween(1300, TweenMax.from($('#section_3 .r'), 0.6, { top: "-80px" }), 600, 1);
        scrollmolienda.addTween(1300, TweenMax.from($('#section_3 .o'), 0.6, { top: "-260px" }), 600, 1);
        scrollmolienda.addTween(1300, TweenMax.from($('#section_3 .m'), 0.6, { top: "-60px" }), 600, 1);
        scrollmolienda.addTween(1300, TweenMax.from($('#section_3 .a_'), 0.6, { top: "-240px" }), 600, 1);

        // scrollmolienda.addTween(1100, TweenMax.from($('#section_3 .vapor_2'), 1, {top: "500px"}), 1000, 1);
        // scrollmolienda.addTween(1100, TweenMax.from($('#section_3 .vapor_1'), 1, {top: "100px"}), 1000, 1);
        scrollmolienda.addTween(1600, TweenMax.from($('#section_3 .olfato'), 0.6, { paddingRight: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(1650, TweenMax.from($('#section_3 .prepara'), 0.6, { paddingLeft: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(1700, TweenMax.from($('#section_3 .cierra'), 0.6, { paddingRight: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(1750, TweenMax.from($('#section_3 .aroma'), 0.6, { paddingLeft: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(1800, TweenMax.from($('#section_3 .scroll'), 0.6, { autoAlpha: 0 }), 150, 1);






        scrollmolienda.addTween(2178, TweenMax.to($('#section_3'), 1, { top: -1084 }), 1084, 1);
        // scrollmolienda.addTween(2010, TweenMax.from( $('#section_4'), 1, {backgroundSize: "200% 200%"}), 1000, 1);
        // scrollmolienda.addTween(2010, TweenMax.to( $('#section_3 .vapor_1')), 1, 1);

        scrollmolienda.addTween(2300, TweenMax.from($('#section_4 .s'), 0.6, { top: "-280px" }), 600, 1);
        scrollmolienda.addTween(2300, TweenMax.from($('#section_4 .a'), 0.6, { top: "-80px" }), 600, 1);
        scrollmolienda.addTween(2300, TweenMax.from($('#section_4 .b'), 0.6, { top: "-260px" }), 600, 1);
        scrollmolienda.addTween(2300, TweenMax.from($('#section_4 .o'), 0.6, { top: "-60px" }), 600, 1);
        scrollmolienda.addTween(2300, TweenMax.from($('#section_4 .r'), 0.6, { top: "-240px" }), 600, 1);

        // scrollmolienda.addTween(2100, TweenMax.from($('#section_4 .vapor_2'), 1, {top: "500px"}), 1000, 1);
        // scrollmolienda.addTween(2100, TweenMax.from($('#section_4 .vapor_1'), 1, {top: "100px"}), 1000, 1);
        scrollmolienda.addTween(2600, TweenMax.from($('#section_4 .molienda'), 0.6, { paddingRight: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(2650, TweenMax.from($('#section_4 .mantener'), 0.6, { paddingLeft: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(2700, TweenMax.from($('#section_4 .percibir'), 0.6, { paddingRight: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(2750, TweenMax.from($('#section_4 .robusta'), 0.6, { paddingLeft: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(2800, TweenMax.from($('#section_4 .caramelo'), 0.6, { paddingRight: "70px", autoAlpha: 0 }), 150, 1);
        scrollmolienda.addTween(2850, TweenMax.from($('#section_4 .recetas'), 0.6, { autoAlpha: 0 }), 150, 1);

        scrollmolienda.addTween(2252, TweenMax.to($('#section_1'), 1, { display: "none" }), 100, 1);
        scrollmolienda.addTween(2252, TweenMax.to($('#section_2'), 1, { display: "none" }), 100, 1);
        scrollmolienda.addTween(2252, TweenMax.to($('.frijoles'), 1, { display: "none" }), 100, 1);

        scrollmolienda.addTween(3252, TweenMax.to($('#section_5'), 1, { top: 0 }), 600, 1);

        scrollmolienda.addTween(4200, TweenMax.to($('#section_3'), 1, { display: "none" }), 100, 1);
        scrollmolienda.addTween(4200, TweenMax.to($('#section_4'), 1, { autoAlpha: 0 }), 100, 1);


        scrollmolienda.addTween(3252, TweenMax.from($('#section_5 .receta_1'), 1, { marginTop: 1084 }), 1084, 1);
        scrollmolienda.addTween(3252, TweenMax.to($('#footer'), 1, { backgroundPosition: "50% 0%" }), 600, 1);
        scrollmolienda.addTween(3252, TweenMax.from($('#section_5 .receta_2'), 1, { marginTop: -1084 }), 1084, 1);
        scrollmolienda.addTween(3252, TweenMax.from($('#section_5 .receta_3'), 1, { marginTop: 1084 }), 1084, 1);
        scrollmolienda.addTween(3252, TweenMax.from($('#section_5 .receta_4'), 1, { marginTop: -1084 }), 1084, 1);
        scrollmolienda.addTween(3252, TweenMax.from($('#section_5 .receta_5'), 1, { marginTop: 1084 }), 1084, 1);



        loopVapor.fromTo('#section_3 .vapor_2', 4, { autoAlpha: 0 }, { autoAlpha: 0.4 });
        loopVapor.fromTo('#section_3 .vapor_2', 4, { autoAlpha: 0.4 }, { autoAlpha: 0 });
        loopVapor.fromTo('#section_3 .vapor_2', 8, { top: 150, scaleX: 1, scaleY: 1 }, { top: -100, scaleX: 1.3, scaleY: 1.3 }, "-=8");
        loopVapor.fromTo('#section_3 .vapor_1', 4, { autoAlpha: 0 }, { autoAlpha: 0.2 }, "-=2");
        loopVapor.fromTo('#section_3 .vapor_1', 4, { autoAlpha: 0.2 }, { autoAlpha: 0 });
        loopVapor.fromTo('#section_3 .vapor_1', 8, { top: 150, scaleX: 1, scaleY: 1 }, { top: -100, scaleX: 1.3, scaleY: 1.3 }, "-=10.2");

        $('#section_2 .scroll').on('click', function() {
            $.scrollTo(2168, 2000);
            console.log('click');
        });
        $('#section_3 .scroll').on('click', function() {
            $.scrollTo(3252, 2000);
            console.log('click');
        });

        $('#section_4 .recetas').on('click', function() {
            $.scrollTo(4336, 2000);
            console.log('click');
        });

        $('.receta').on('click', function() {

            if (full == 0) {
                $('.receta').css({ cursor: "url(img/close.png), default" });
                TweenMax.to($('.receta'), 1, { width: 0 /*, zIndex: 9, position: "relative"*/ });
                TweenMax.to($(this), 1, { width: 1920, overwrite: "auto" /*, zIndex: 9, position: "relative"*/ });
                TweenMax.to($(this).find('p'), 1, { marginLeft: -380 /*, zIndex: 9, position: "relative"*/ });
                TweenMax.to($(this).find('.cont_recetas_copys'), 1, { display: 'block' /*, zIndex: 9, position: "relative"*/ });
                TweenMax.to($(this).find('img'), 1, { opacity: 1 /*, zIndex: 9, position: "relative"*/ });
                full = 1;
            } else {
                // $(this).width(382)
                $('.receta').css({ cursor: "pointer" });
                TweenMax.to($('.receta'), 1, { width: 382 /*, zIndex: 1, position: "relative"*/ });
                TweenMax.to($(this), 1, { width: 382 /*, zIndex: 1, position: "relative"*/ });
                TweenMax.to($(this).find('p'), 1, { marginLeft: 0 /*, zIndex: 1, position: "relative"*/ });
                TweenMax.to($(this).find('.cont_recetas_copys'), 1, { display: 'none' /*, zIndex: 9, position: "relative"*/ });

                TweenMax.to($(this).find('img'), 1, { opacity: 0 /*, zIndex: 1, position: "relative"*/ });

                full = 0;
            }
        });


        $(".draggable").draggable({ axis: "x" });
        ripple.fromTo('.cont_cafe', 10, { scaleY: 0.4, scaleX: 0.4 }, { scaleY: 1, scaleX: 1 });
        ripple.fromTo('.cont_cafe', 3, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=10");
        ripple.fromTo('.cont_cafe', 3, { autoAlpha: 1 }, { autoAlpha: 0 }, "-=3");


        loopScroll.to('.scroll', 0.3, { backgroundPosition: "0px +=6px", delay: 6 });
        loopScroll.to('.scroll', 0.3, { backgroundPosition: "0px -=6px" });
        loopScroll.to('.scroll', 0.3, { backgroundPosition: "0px +=6px" });
        loopScroll.to('.scroll', 0.3, { backgroundPosition: "0px -=6px" });
        loopScroll.to('.scroll', 0.3, { backgroundPosition: "0px +=6px" });
        loopScroll.to('.scroll', 0.3, { backgroundPosition: "0px -=6px" });
    }



    $('.frijoles .scroll').on('click', function() {
        $.scrollTo(1084, 2000);
        console.log('click');

    });






    intro.from($('#section_1'), 1.5, { autoAlpha: 0 });
    intro.from($('#footer'), 0.6, { bottom: "-100px" }, "-=0.3");

    intro.from($('#section_1 .welcome'), 0.6, { marginTop: "50px", autoAlpha: 0 }, "-=0.3");
    intro.from($('#section_1 .logo'), 0.6, { marginTop: "50px", autoAlpha: 0 }, "-=0.3");
    intro.from($('#section_1 .molienda-logo'), 0.6, { marginTop: "50px", autoAlpha: 0 }, "-=0.3");
    intro.from($('#section_1 .sello'), 0.6, { marginTop: "50px", autoAlpha: 0 }, "-=0.3");

    intro.from($('.frijoles .bean_1'), 0.6, { marginTop: "-400px", autoAlpha: 0 }, "-=0.3");
    intro.from($('.frijoles .bean_2'), 0.6, { marginTop: "-400px", autoAlpha: 0 }, "-=0.3");
    intro.from($('.frijoles .bean_3'), 0.6, { marginTop: "-400px", autoAlpha: 0 }, "-=0.3");
    intro.from($('.frijoles .bean_4'), 0.6, { marginTop: "-1000px" }, "-=0.3");
    intro.from($('.frijoles .bean_5'), 0.6, { marginTop: "-400px", autoAlpha: 0 }, "-=0.3");
    intro.from($('.frijoles .bean_6'), 0.6, { marginTop: "-400px", autoAlpha: 0 }, "-=0.3");
    intro.from($('.frijoles .bean_7'), 0.6, { marginTop: "-400px", autoAlpha: 0 }, "-=0.3");
    intro.from($('.frijoles .bean_8'), 0.6, { marginTop: "-400px", autoAlpha: 0 }, "-=0.3");

    intro.from($('.frijoles .scroll'), 0.6, { autoAlpha: 0, onComplete: sectionsLoad }, "-=0.3");






    // scrollmolienda.addTween(0, TweenMax.to( $('#section_1'), 1, {paddingLeft: 200}), 1000, 1);







    if (Modernizr.touch) {
        var scrollPos = 0;
        // using iScroll but deacting -webkit-transform because pin wouldn't work becasue of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
        var myScroll = new iScroll('viewport-wrapper', { vScrollbar: true, hScroll: false, vScroll: true, bounce: false, useTransform: false, useTransition: false });

        function animationLoop() {
            // make sure to have the requestAnimationFrame polyfill by Paul Irish: https://gist.github.com/paulirish/1579671
            window.requestAnimationFrame(animationLoop);
            if (myScroll.y != scrollPos) { // if position has changed
                scrollPos = myScroll.y;
                // udate scrollcontainer position
                controller.setScrollContainerOffset(0, -myScroll.y);
                // force an immediate update
                controller.triggerCheckAnim(true);
            }
        }
        // when deactivating transform in iScroll (useTransform:false) requestAnimationFrame is not triggered during touchmove
        $("#viewport-wrapper").get(0).addEventListener("touchmove", function() {
            animationLoop();
        });

        animationLoop();
    }



    $('body').mousemove(function(event) {
        cx = Math.ceil($(window).width() / 2.0);
        cy = Math.ceil($(window).height() / 2.0);
        dx = event.pageX - cx;
        dy = event.pageY - cy;
        // mouseX = event.pageX;
        wRecetas = Math.ceil((event.pageX * ($(window).width() - 1920)) / $(window).width());
        // minus = ((wRecetas)*(event.pageX))*-1;
        // moveX = ((mouseX*wRecetas)*-1);
        tiltx = (dy / cy);
        tilty = -(dx / cx);
        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
        degree = (radius * 5);
        // moveX = ((dx+550)*-1)/2.5;

        // moveX = ((wRecetas)*(minus))*-1;
        // console.log(wRecetas);
        // console.log((mouseX*wRecetas)*-1);
        // console.log(tiltx);
        // console.log(tilty);
        // console.log(wRecetas);

        TweenLite.set("#section_1 .container", { transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)' });
        TweenLite.set(".frijoles .container", { transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)' });
        // TweenLite.set(".frijoles .bean", {marginTop: tiltx*12});
        TweenLite.set("#section_2 .cont_vapor", { transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)' });
        // TweenLite.set("#section_5 .cont_recetas", {left: tilty*400 });
        TweenLite.set("#section_5 .cont_recetas", { marginLeft: wRecetas });
        //$('#picture').css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
    });
});


$(window).resize(function() {
    window.location.reload()
    $('.container').css({ paddingTop: marginT });
});