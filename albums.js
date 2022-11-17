"use strict";

class Track {
    #titel;
    constructor(titel) {
        this.#titel = titel;
    }
    getTitel() {
        return this.#titel;
    }
}

class Album {
    #titel;
    #jaar;
    #tracks = [];
    constructor(titel, jaar) {
        this.#titel = titel;
        this.#jaar = jaar;
    }
    voegTrackToe(track) {
        this.#tracks.push(track);
    }
    getTitel() {
        return this.#titel;
    }
    getJaar() {
        return this.#jaar;
    }
    getTracks() {
        return this.#tracks;
    }
}

class Artiest {
    #naam;
    #albums = [];
    constructor(naam) {
        this.#naam = naam;
    }
    voegAlbumToe(album) {
        this.#albums.push(album);
    }
    getNaam() {
        return this.#naam;
    }
    getAlbums() {
        return this.#albums;
    }
}

const album1 = new Album("Stoney & Meatloaf", 1971);
album1.voegTrackToe(new Track("She Waits By The Window"));
album1.voegTrackToe(new Track("It Takes All Kinds of People"));
const album2 = new Album("Bat out of Hell", 1977);
album2.voegTrackToe(new Track("Bat out of Hell"));
album2.voegTrackToe(new Track("Heaven can wait"));
const artiest = new Artiest("Meat Loaf");
artiest.voegAlbumToe(album1);
artiest.voegAlbumToe(album2);
console.log(artiest.getNaam());
document.body.insertAdjacentHTML("beforeend", "<h1>"+artiest.getNaam()+"</h1>");
for (const album of artiest.getAlbums()) {
    console.log(album.getTitel(), album.getJaar());
    document.body.insertAdjacentHTML("beforeend", album.getTitel()+" - Jaar: "+album.getJaar()+"<br>");
    for (const track of album.getTracks()) {
        console.log(track.getTitel());
        document.body.insertAdjacentHTML("beforeend", track.getTitel()+"<br>");
    }
    document.body.insertAdjacentHTML("beforeend", "<br>");
}

const artiest2 = new Artiest("Iron Maiden");
const album3 = new Album("The Number of the Beast", 1982);
album3.voegTrackToe(new Track("Run to the Hills"));
album3.voegTrackToe(new Track("Invaders"));
const album4 = new Album("Powerslave", 1984);
album4.voegTrackToe(new Track("Aces High"));
album4.voegTrackToe(new Track("Powerslave"));
artiest2.voegAlbumToe(album3);
artiest2.voegAlbumToe(album4);
console.log(artiest2.getNaam());
document.body.insertAdjacentHTML("beforeend", "<h1>"+artiest2.getNaam()+"</h1>");
for (const album of artiest2.getAlbums()) {
    console.log(album.getTitel(), album.getJaar());
    document.body.insertAdjacentHTML("beforeend", album.getTitel()+" - Jaar: "+album.getJaar()+"<br>");
    for (const track of album.getTracks()) {
        console.log(track.getTitel());
        document.body.insertAdjacentHTML("beforeend", track.getTitel()+"<br>");
    }
    document.body.insertAdjacentHTML("beforeend", "<br>");
}