function randomize() {
    // DATA
    var colors = [ '#F7A46B', '#EF7273', '#C272A1', '#7F9DCB', '#75CAE7', '#61B9BC', '#5BAA81', '#91CD93', '#D2DD66' ];
    var images = [ 'againstthegods', 'arelightson', 'systemsthinking' ];

    // GOSUBS
    function random(arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    function image(name) {
        return 'images/text_' + name + '.png';
    }

    // PROGRAM
    var randomImageName = random(images);
    var randomImage = image(randomImageName);
    $('#random-image').attr('src', randomImage);
    $('#random-image').attr('alt', randomImageName);

    var randomColor = random(colors);
    $('#random-color-bg').attr('bgcolor', randomColor);
    $('.heading').css('color', randomColor);
}

// RUN
randomize();
