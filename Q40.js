var Album = /** @class */ (function () {
    function Album(artist, title, tracks) {
        this.artist = artist;
        this.title = title;
        this.tracks = tracks;
    }
    Album.prototype.getInfo = function () {
        var albumInfo = {
            artist: this.artist,
            title: this.title,
        };
        if (this.tracks !== undefined) {
            albumInfo.tracks = this.tracks;
        }
        return albumInfo;
    };
    return Album;
}());
// Create three album objects
var album1 = new Album("Artist1", "Album1");
var album2 = new Album("Artist2", "Album2", 12); // Including the number of tracks
var album3 = new Album("Artist3", "Album3");
// Print the album information
console.log(album1.getInfo());
console.log(album2.getInfo());
console.log(album3.getInfo());
