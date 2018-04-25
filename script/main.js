let images = {}
for (let i = 1; i <= 16; i++) {
    let name = 'idle_' + i
    let path = 'image/idle/idle_' + i + '.png'
    images[name] = path
}
for (let i = 1; i <= 11; i++) {
    let name = 'run_' + i
    let path = 'image/run/run_' + i + '.png'
    images[name] = path
}

log(images)

ImageLoader.instance().loadImages(images, function() {
    log('image loaded')
    log(ImageLoader.instance().getImageByName('idle_2'))
})