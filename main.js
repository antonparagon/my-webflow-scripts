document.addEventListener('DOMContentLoaded', function() {
  console.log("JavaScript is loaded!");  // Debugging message

  // Get video players
  var introIframe = document.getElementById('intro-video');
  var mainIframe = document.getElementById('main-video');

  // Initialize Vimeo players
  var introPlayer = new Vimeo.Player(introIframe);
  var mainPlayer = new Vimeo.Player(mainIframe);

  // Get buttons
  var unmuteButton = document.getElementById('unmute-button');
  var pauseButton = document.getElementById('pause-button');
  var playButton = document.getElementById('play-button');

  // Handle Unmute Button click (start main video from the beginning)
  unmuteButton.addEventListener('click', function() {
    console.log("Unmute button clicked!");  // Debugging message

    // Stop the intro video (it will be muted and loop automatically)
    introPlayer.pause(); // Pause the intro video

    // Switch to the main video
    mainIframe.style.display = 'block';  // Show the main video iframe
    introIframe.style.display = 'none';  // Hide the intro video iframe

    // Start the main video with sound
    mainPlayer.setCurrentTime(0).then(function() {
      mainPlayer.setVolume(1); // Unmute
      mainPlayer.play(); // Play the main video
    });

    // Hide the Unmute button, show Pause button
    unmuteButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
  });

  // Handle Pause Button click (pause main video)
  pauseButton.addEventListener('click', function() {
    console.log("Pause button clicked!");  // Debugging message
    mainPlayer.pause(); // Pause the main video
    pauseButton.style.display = 'none'; // Hide the Pause button
    playButton.style.display = 'inline-block'; // Show the Play button
  });

  // Handle Play Button click (play main video from the position it got paused)
  playButton.addEventListener('click', function() {
    console.log("Play button clicked!");  // Debugging message
    mainPlayer.play(); // Play the main video from where it was paused
    playButton.style.display = 'none'; // Hide the Play button
    pauseButton.style.display = 'inline-block'; // Show the Pause button
  });
});
