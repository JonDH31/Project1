var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    opacity: [.5, .5],
    isPausedWhenNotInView: true,
    image : {
        source: './assets/images/image2.jpg',
        blendingMode: 'xor'
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});

