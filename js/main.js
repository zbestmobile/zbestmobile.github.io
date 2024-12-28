    //  BURGER

    const burger = document.querySelector('#burger');
    const header = document.querySelector('.header');
    // делаем переключения меню
        burger.addEventListener("click", function() {
            header.classList.toggle('open');
        });
    // при клике вне области кнопки меню, меню закрывается
    document.addEventListener("click", function (e) {
        if (!header.contains(e.target))
        {header.classList.remove('open');}
    });

    
    
    
    
    // MAP
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [44.039772051389555,43.122781254774075],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

        var myPlacemark = new ymaps.Placemark([44.039772051389555,43.122781254774075], {}, {
            preset: 'islands#redDotIcon',
            iconImageSize: [58, 62],
            });
        myMap.geoObjects.add(myPlacemark);
    };


