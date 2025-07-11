document.addEventListener('DOMContentLoaded', function() {
    // Password elements
    const passwordScreen = document.getElementById('passwordScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');
    const passwordError = document.getElementById('passwordError');
    
    // Main content elements
    const quoteButton = document.getElementById('quoteButton');
    const audioPlayer = document.getElementById('audioPlayer');
    const audio = document.getElementById('audio');
    
    // Total number of MP3 files (01.mp3 to 48.mp3)
    const totalFiles = 48;
    
    // Correct password
    const correctPassword = "בנוהל";
    
    // Password authentication function
    function checkPassword() {
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === correctPassword) {
            // Hide password screen and show main content
            passwordScreen.style.display = 'none';
            mainContent.style.display = 'block';
            passwordError.style.display = 'none';
            
            // Clear password input
            passwordInput.value = '';
            
            // Focus on main content
            mainContent.focus();
        } else {
            // Show error message
            passwordError.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    // Password screen event listeners
    submitPassword.addEventListener('click', checkPassword);
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Focus on password input when page loads
    passwordInput.focus();
    
    // Main content functionality (existing code)
    quoteButton.addEventListener('click', function() {
        // Generate a random number between 1 and 48
        const randomNumber = Math.floor(Math.random() * totalFiles) + 1;
        
        // Format the number with leading zero (01, 02, etc.)
        const fileName = randomNumber.toString().padStart(2, '0');
        
        // Set the audio source to the randomly selected MP3 file
        audio.src = `public/${fileName}.mp3`;
        
        // Show the audio player
        audioPlayer.style.display = 'block';
        
        // Play the audio
        audio.play().catch(function(error) {
            console.log('Audio playback failed:', error);
            // Show a fallback message if audio can't be played
            alert('לא ניתן לנגן את הקובץ. אנא בדוק שהקבצים נמצאים בתיקיית public.');
        });
        
        // Add a small visual feedback to the button
        quoteButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            quoteButton.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Handle audio ended event
    audio.addEventListener('ended', function() {
        // Optionally hide the audio player when the audio finishes
        // audioPlayer.style.display = 'none';
    });
    
    // Handle audio error
    audio.addEventListener('error', function() {
        console.log('Error loading audio file');
        alert('שגיאה בטעינת קובץ האודיו. אנא בדוק שהקבצים נמצאים בתיקיית public.');
    });
}); 