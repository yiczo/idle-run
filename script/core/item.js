class Item {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}

class ImageItem extends Item {
    constructor(image, x, y, width, height) {
        super(x, y, width, height)
        this.image = image
    }
}

class AnimeItem extends Item {
    constructor(allImages, x, y, width, height) {
        super(x, y, width, height)

        this.allImages = allImages
        this.FRAME_INTERVAL = 5
        this.setStatus(Object.keys(allImages)[0])
    }

    setStatus(status) {
        this.status = status
        
        this.currentImageIndex = 0
        this.frameCount = this.FRAME_INTERVAL
        this.image = this.allImages[status][0]
    }

    update() {
        this.frameCount--
        if (this.frameCount > 0) {
            return
        }
        this.frameCount = this.FRAME_INTERVAL

        let images = this.allImages[this.status]
        let image = images[this.currentImageIndex]
        this.image = image

        this.currentImageIndex++
        let lastImageIndex = images.length - 1
        if (this.currentImageIndex >= lastImageIndex) {
            this.currentImageIndex = 0
        }
    }

}
