window.onload = () => {
        document.body.classList.remove("container");
    
        const audio = document.getElementById('myAudio');
    
        // Intenta reproducir el audio
        audio.play().then(() => {
            localStorage.setItem('audioPlaying', 'true');
        }).catch((error) => {
            console.log("Error al reproducir audio:", error);
        });
    };
    