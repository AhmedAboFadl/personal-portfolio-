- new WOW().init();


  let btn = document.getElementById(`btn`);













btn.onclick = function () {

      window.scrollTo({

        top: 0,
        behavior: `smooth`

      })

    };






  window.addEventListener('scroll', function () {
    if (window.scrollY <= 500 ) {

      {
        btn.style.display = 'none';

      }

      } else {
        btn.style.display = 'block';
      }
    });

        if (window.scrollY <= 500) {
            btn.style.display = 'none';
          } else {
            btn.style.display = 'block';
          }


