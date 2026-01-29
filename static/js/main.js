function openPopup(type) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");
    const video = document.getElementById("popup-video");

    popup.style.display = "flex";

    if (type === "ticket") {
        title.innerText = "🎫 Ticket Bot";
        video.src = "/static/videos/ticket.mp4";
        text.innerHTML = `
<b>Ticket disponibili:</b><br><br>
・BOTTONI ✅<br>
・DESCRIZIONE PERSONALIZZATA ✅<br>
・TRASCRIZIONE NEL CANALE STAFF E IN DM ✅
        `;
    }

    if (type === "magazzino") {
        title.innerText = "📦 Magazzino EMS";
        video.src = "/static/videos/magazzino.mp4";
        text.innerHTML = `
<b>Magazzino disponibile:</b><br><br>
・MAGAZZINO PERSONALIZZATO ✅<br>
・INVENTARIO MEDIKIT / BENDE IN TEMPO REALE ✅<br>
・/RIFORNIMENTO SOLO DIRIGENZA ✅<br>
・LOG RIFORNIMENTI E SCARICHI ✅
        `;
    }

    if (type === "moderazione") {
        title.innerText = "🛡️ Moderazione";
        video.src = "/static/videos/moderazione.mp4";
        text.innerHTML = `
<b>/ban disponibile:</b><br><br>
・COMANDO ONLY STAFF ✅<br>
・MOTIVO BAN ✅<br>
・AUTO ROLE ✅<br>
・LOG /BAN ✅
        `;
    }

    video.load();
}

function closePopup() {
    const popup = document.getElementById("popup");
    const video = document.getElementById("popup-video");

    popup.style.display = "none";
    video.pause();
    video.src = "";
}
