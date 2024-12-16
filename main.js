document.addEventListener('DOMContentLoaded', function() {
  // Hent iframe-elementene for intro og hovedvideoene
  var introIframe = document.getElementById('intro-video');
  var mainIframe = document.getElementById('main-video');
  
  // Initialiser Vimeo-spillerne for begge videoene
  var introPlayer = new Vimeo.Player(introIframe);
  var mainPlayer = new Vimeo.Player(mainIframe);
  
  // Hent knappene fra DOM
  var unmuteButton = document.getElementById('unmute-button');
  var pauseButton = document.getElementById('pause-button');
  var playButton = document.getElementById('play-button');

  // Hent progress bar-elementene
  var progressBar = document.getElementById('progress-bar');
  var progressContainer = document.getElementById('progress-container');
  
  // Funksjon for å oppdatere progress baren
  function updateProgressBar() {
    mainPlayer.getCurrentTime().then(function(seconds) {
      mainPlayer.getDuration().then(function(duration) {
        // Skriv ut informasjon i console for å sjekke at vi får verdier
        console.log("Current time: " + seconds + " seconds");
        console.log("Duration: " + duration + " seconds");

        var progress = (seconds / duration) * 100;  // Beregn fremdriften i prosent
        console.log("Progress: " + progress + "%");  // Skriv ut progressen i prosent
        progressBar.style.width = progress + '%';    // Oppdater progress baren
      });
    }).catch(function(error) {
      console.error('Error getting current time or duration:', error);
    });
  }

  // Oppdater progress baren hvert 0.5 sekund
  setInterval(updateProgressBar, 500);

  // Når Unmute-knappen trykkes, start hovedvideoen med lyd
  unmuteButton.addEventListener('click', function() {
    introPlayer.pause(); // Pause intro-videoen
    
    // Skjul intro-videoen og vis hovedvideoen
    mainIframe.style.display = 'block';  // Vis hovedvideoen
    introIframe.style.display = 'none';  // Skjul intro-videoen
    
    // Start hovedvideoen fra start og aktiver lyd
    mainPlayer.setCurrentTime(0).then(function() {
      mainPlayer.setVolume(1); // Unmute hovedvideoen
      mainPlayer.play(); // Spill av hovedvideoen
    });

    // Skjul Unmute-knappen og vis Pause-knappen
    unmuteButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
