const sounds = ['CRONUS ZEN','DARTH EATIN','DYING BIRD','FELL DOWN THE HOLE','FLUTE','FOURTH HORSEMAN','FUCKING HELL','GRENADE','ITS ALWAYS ME','LOVE SHOTGUNS','MEAHH','NO SPECIAL','NOOO NOOO','NOOO','PUNCHY','RAHHH','SWITCH TO TETHER','TITANS','TOTALLY INVISIBLE','WATATAKTAKT','WHATS GOING ON','YOU RAT']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        
        song.pause();
        song.currentTime = 0;
    })
}

