function drumKeyEffect() {
  // Attente de l'évènement keydown
  window.addEventListener("keydown", function (event) {
    // Animation visuelle suite au keydown
    // Récup de la div à modifier
    const keydown = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // Application de la class key_playing à la div en question
    if (keydown === null) {
      return;
    } else {
      keydown.classList.add("key_playing");
    }

    // Retour à l'aspect normal de la div animée
    // Il est impératif d'utiliser 'querySelectorAll' car cela retourne un array et nous avons besoin d'un array pour le foreach() qui suit.
    const all_keys_containers = document.querySelectorAll(".one_key_container");

    all_keys_containers.forEach((container) => {
      container.addEventListener("transitionend", function (event) {
        if (event.propertyName !== "transform") {
          return; // arrêt de la fonction si une mauvaise touche est tapée
        } else {
          container.classList.remove("key_playing");
        }
      });
    });

    // Ajout d'un son d'instrument
    // Récup de l'élément audio à jouer suite au keydown

    sound_to_play = document.querySelector(
      `audio[id="sound_${event.keyCode}"]`
    );

    if (!sound_to_play) {
      return; // arrêt de la fonction si une mauvaise touche est tapée
    } else {
      sound_to_play.currentTime = 0; // Remise à zéro du currentTime pour pouvoir enchaîner les sons sans attendre la fin du précédent.
      sound_to_play.play();
    }
  });
}

drumKeyEffect();
console.log("Je suis le code JS du drumkit");
