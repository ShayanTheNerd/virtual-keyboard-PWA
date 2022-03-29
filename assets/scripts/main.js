/* light/dark mode start */
const themeName = document.getElementById('themeName');
const keyboardDark = document.getElementById('keyboardDark');
const keyboardLight = document.getElementById('keyboardLight');
let theme;

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    lightToDark();
} else {
    darkToLight();
}

function changeTheme() {
    if (theme === 'dark') {
        darkToLight();
    } else {
        lightToDark();
    }
}

function lightToDark() {
    document.documentElement.classList.add('dark');
    theme = 'dark';
    themeName.innerHTML = "Dark Theme";
    keyboardDark.classList.add('hidden');
    keyboardLight.classList.remove('hidden');
}

function darkToLight() {
    document.documentElement.classList.remove('dark');
    theme = 'light';
    themeName.innerHTML = "Light Theme";
    keyboardDark.classList.remove('hidden');
    keyboardLight.classList.add('hidden');
}
/* light/dark mode end */

/* textarea button start */
function ClearTextarea() {
    const textarea = document.getElementById("textarea");
    textarea.value = "";
}
/* textarea button end */

/* sound control start */
let SoundOn = true;
function keySoundControl() {
    if (SoundOn) {
        SoundOn = false;
        document.getElementById("soundLabel").innerHTML = "OFF";
        document.getElementById("soundOnIcon").classList.add("hidden");
        document.getElementById("soundOffIcon").classList.remove("hidden");
        document.getElementById("keySound").classList.remove("keySoundOn");
    }
    else {
        SoundOn = true;
        document.getElementById("soundLabel").innerHTML = "ON";
        document.getElementById("soundOnIcon").classList.remove("hidden");
        document.getElementById("soundOffIcon").classList.add("hidden");
        document.getElementById("keySound").classList.add("keySoundOn");
    }
};
/* sound control end */

/* typing sound start */
btns = document.getElementsByClassName("key");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function keySound() {
        if (SoundOn) {
            document.getElementById('keySound').play();
        }
    });
};
/* typing sound end */

