$(function() {
        var words = [
                'un développeur',
                'un designer',
                'un graphiste'
        ],
        i = 0;

        // Affichage menu responsif
        $(".navbar-responsive").toggle();

        $(".menu").click(function () {
                $(".navbar-responsive").toggle("slow");
        });

        // Affichage aléatoire des mots
         setInterval(function() {
                $("#word").fadeOut(function() {
                        $(this).html(words[i = (i + 1) % words.length]).fadeIn();
                });
        }, 4000);

        // Scroll vers les sections
        $(".scroll").click(function() {
                var section = $("." + this.id);
                $("html, body").animate({scrollTop: section.offset().top}, 'slow');
        });

        // Affichage des progress bar
        window.sr = ScrollReveal();
        sr.reveal('.progress-bar', {
          origin: 'left',
          duration: 2000,
          distance: '100%'
        })
      });
