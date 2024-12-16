document.addEventListener('DOMContentLoaded', function() {
  // Hent videoene (iframe-elementene)
  var introIframe = document.getElementById('intro-video');
  var mainIframe = document.getElementById('main-video');
  
  // Initialiser Vimeo-spillere
  var introPlayer = new Vimeo.Player(introIframe);
  var mainPlayer = new Vimeo.Player(mainIframe);
  
  // Hent knappene
  var unmuteButton = document.getElementById('unmute-button');
  var pauseButton = document.getElementById('pause-button');
  var playButton = document.getElementById('play-button');
  
  // Når Unmute-knappen klikkes (start hovedvideoen med lyd)
  unmuteButton.addEventListener('click', function() {
    // Stopp intro-videoen
    introPlayer.pause();
    
    // Bytt til hovedvideoen
    mainIframe.style.display = 'block';  // Vis hovedvideo
    introIframe.style.display = 'none';  // Skjul intro-video
    
    // Start hovedvideoen fra starten med lyd
    mainPlayer.setCurrentTime(0).then(function() {
      mainPlayer.setVolume(1); // Unmute
      mainPlayer.play(); // Spill av hovedvideoen
    });

    // Skjul Unmute-knappen og vis Pause-knappen
    unmuteButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
  });

  // Når Pause-knappen klikkes (pause hovedvideoen)
  pauseButton.addEventListener('click', function() {
    mainPlayer.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'inline-block';
  });

  // Når Play-knappen klikkes (spill av hovedvideoen fra den pauserte posisjonen)
  playButton.addEventListener('click', function() {
    mainPlayer.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
  });
});
