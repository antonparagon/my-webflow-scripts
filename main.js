document.addEventListener('DOMContentLoaded', function() {
  // Få tak i iframe-elementene (videoene)
  var introIframe = document.getElementById('intro-video');
  var mainIframe = document.getElementById('main-video');
  
  // Initialiser Vimeo Player for begge videoene
  var introPlayer = new Vimeo.Player(introIframe);
  var mainPlayer = new Vimeo.Player(mainIframe);
  
  // Få tak i unmute-knappen
  var unmuteButton = document.getElementById('unmute-button');
  var pauseButton = document.getElementById('pause-button');
  var playButton = document.getElementById('play-button');
  
  // Unmute-knappen skal starte main-videoen
  unmuteButton.addEventListener('click', function() {
    // Stopp intro-videoen og start main-videoen
    introPlayer.pause();  // Pause intro-videoen

    // Skjul intro-video og vis main-video
    introIframe.style.display = 'none';
    mainIframe.style.display = 'block';

    // Start main-videoen fra starten med lyd
    mainPlayer.setCurrentTime(0).then(function() {
      mainPlayer.setVolume(1);  // Sett volumet til 1 (unmute)
      mainPlayer.play();        // Spill main-videoen
    });

    // Skjul unmute-button og vis pause-button
    unmuteButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
  });

  // Pause-knappen skal pause main-videoen
  pauseButton.addEventListener('click', function() {
    mainPlayer.pause();  // Pause main-videoen
    pauseButton.style.display = 'none';  // Skjul pause-button
    playButton.style.display = 'inline-block';  // Vis play-button
  });

  // Play-knappen skal starte main-videoen fra pausestedet
  playButton.addEventListener('click', function() {
    mainPlayer.play();  // Spill main-videoen fra pausestedet
    playButton.style.display = 'none';  // Skjul play-button
    pauseButton.style.display = 'inline-block';  // Vis pause-button
  });
});
