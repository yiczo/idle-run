class GameScene extends Scene {
    constructor() {
        super()
    }

    setupItems() {
        let image = ImageLoader.instance().getImageByName('idle_2')
        let item = new ImageItem(image, 0, 0, 140, 140)
        this.addItem(item)

        let idleImages = []
        for (let i = 1; i < 16; i++) {
            let name = 'idle_' + i
            let image = ImageLoader.instance().getImageByName(name)
            idleImages.push(image)
        }
        let runImages = []
        for (let i = 1; i < 11; i++) {
            let name = 'run_' + i
            let image = ImageLoader.instance().getImageByName(name)
            runImages.push(image)
        }
        let allImages = {
            'idle': idleImages,
            'run': runImages,
        }
        let animeItem = new AnimeItem(allImages, 0, 200, 150, 150)
        this.addItem(animeItem)
    }

    setupActions() {
        let self = this
        let moveRight = new Action(ActionType.HOLD, 'd', function() {
            for (let item of self.items) {
                if (item instanceof AnimeItem) {
                    if (item.status != 'run') {
                        item.setStatus('run')
                    }
                    item.x += 2
                }
            }
        })
        this.actions = [moveRight]
    }

    update() {
        for (let item of this.items) {
            if (item instanceof AnimeItem) {
                if (!KeyboardManager.instance().anyKeyPressed) {
                    if (item.status != 'idle') {
                        item.setStatus('idle')
                    }
                }
                item.update()
            }
        }
    }
}
