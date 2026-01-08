namespace SpriteKind {
    export const something = SpriteKind.create()
    export const attack = SpriteKind.create()
    export const I_hate_yellow = SpriteKind.create()
    export const I_hate_green = SpriteKind.create()
    export const Yellow = SpriteKind.create()
    export const Green = SpriteKind.create()
    export const Rainbow = SpriteKind.create()
    export const I_hate_rainbow = SpriteKind.create()
    export const rainbow_spear = SpriteKind.create()
    export const black = SpriteKind.create()
    export const I_hate_black = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.black, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite, effects.starField, 100)
})
sprites.onOverlap(SpriteKind.rainbow_spear, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.hearts, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.rainbow_spear, effects.fire, 500)
})
function heart_spawning () {
    heart = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    heart.setPosition(randint(0, 160), randint(0, 120))
    heart.setPosition(randint(0, 160), randint(0, 120))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rainbow, function (sprite, otherSprite) {
    info.changeLifeBy(-4)
    pause(100)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite, effects.starField, 100)
})
info.onScore(30, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.I_hate_yellow)
    sprites.destroyAllSpritesOfKind(SpriteKind.I_hate_green)
    sprites.destroyAllSpritesOfKind(SpriteKind.Yellow)
    sprites.destroyAllSpritesOfKind(SpriteKind.Green)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    game.splash("Warning! Warning!")
    game.splash("Rainbow Slime!")
    boss = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 7 7 1 f 7 7 f 1 7 7 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . a a a a a a a a a a a a . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Rainbow)
    boss_health = 3
    boss.setPosition(randint(0, 160), randint(0, 120))
    boss.follow(mySprite, 80)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.I_hate_yellow, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Yellow, effects.bubbles, 200)
    sprites.destroyAllSpritesOfKind(SpriteKind.I_hate_yellow, effects.bubbles, 200)
    scene.cameraShake(8, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.I_hate_green, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Green, effects.bubbles, 200)
    sprites.destroyAllSpritesOfKind(SpriteKind.I_hate_green, effects.bubbles, 200)
    scene.cameraShake(8, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.bubbles)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.I_hate_black, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.black, effects.bubbles, 200)
    sprites.destroyAllSpritesOfKind(SpriteKind.I_hate_black, effects.bubbles, 200)
    scene.cameraShake(8, 500)
})
info.onLifeZero(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.hearts, 100)
})
info.onScore(40, function () {
    Boss_slayer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 . . . 2 2 2 2 . . . 1 1 . 
        . . . 1 1 4 4 4 4 4 4 1 1 . . . 
        . . . . 5 1 1 5 5 1 1 5 . . . . 
        . . . 7 7 1 f 1 1 f 1 7 7 . . . 
        . . 8 8 8 1 1 8 8 1 1 8 8 8 . . 
        . . a 1 1 a a a a a a 1 1 a . . 
        . 1 1 . . . . . . . . . . 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.I_hate_rainbow)
    boss.setPosition(15, 15)
    boss.setVelocity(0, 0)
    for (let index = 0; index < 4; index++) {
        heart_spawning()
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . a . . . . . . . . . . . . 
            . . . . 8 . . . . . . . . . . . 
            . . . . . 7 . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . . 4 . f . . . . . . 
            . . . . . . . . 2 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.rainbow_spear)
        myEnemy.setPosition(15, 15)
        myEnemy.follow(heart, 50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Green, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite, effects.starField, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.I_hate_rainbow, function (sprite, otherSprite) {
    let boss__health = 0
    boss_health += -1
    sprites.destroy(Boss_slayer, effects.smiles, 200)
    scene.cameraShake(4, 500)
    if (boss__health == 0) {
        sprites.destroy(boss, effects.fire, 500)
        scene.cameraShake(8, 500)
    }
})
let black_slime: Sprite = null
let green_slime: Sprite = null
let yellow_slime: Sprite = null
let I_hate: Sprite = null
let myEnemy: Sprite = null
let Boss_slayer: Sprite = null
let boss: Sprite = null
let heart: Sprite = null
let boss_health = 0
let mySprite: Sprite = null
scene.setBackgroundColor(13)
game.splash("avoid slimes by joystick")
mySprite = sprites.create(img`
    ....................
    ....................
    ........aaa.........
    .......a...a........
    ......a.f.f.a.......
    ......a.....a.......
    ......a.f.f.a.......
    .......afffa........
    ........aaa.........
    .........a..........
    ........aaa.........
    .......a.a.a........
    ......a..a..a.......
    ........a.a.........
    .......a...a........
    ......a.....a.......
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
mySprite.setStayInScreen(true)
info.setLife(10)
boss_health = 1
game.onUpdateInterval(500, function () {
    if (Math.percentChance(20)) {
        heart_spawning()
    }
    if (Math.percentChance(10)) {
        I_hate = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 . . . 7 7 7 7 . . . 2 2 . 
            . . . 2 2 7 7 7 7 7 7 2 2 . . . 
            . . . . 7 2 2 7 7 2 2 7 . . . . 
            . . . 7 7 1 f 2 2 f 1 7 7 . . . 
            . . 7 7 7 2 2 7 7 2 2 7 7 7 . . 
            . . 7 2 2 7 7 7 7 7 7 2 2 7 . . 
            . 2 2 . . . . . . . . . . 2 2 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.I_hate_green)
        I_hate.setPosition(randint(0, 160), randint(0, 120))
    }
    if (Math.percentChance(10)) {
        I_hate = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 . . . 5 5 5 5 . . . 2 2 . 
            . . . 2 2 5 5 5 5 5 5 2 2 . . . 
            . . . . 5 2 2 5 5 2 2 5 . . . . 
            . . . 5 5 1 f 2 2 f 1 5 5 . . . 
            . . 5 5 5 2 2 5 5 2 2 5 5 5 . . 
            . . 5 2 2 5 5 5 5 5 5 2 2 5 . . 
            . 2 2 . . . . . . . . . . 2 2 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.I_hate_yellow)
        I_hate.setPosition(randint(0, 160), randint(0, 120))
    }
    if (Math.percentChance(10)) {
        I_hate = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 . . . f f f f . . . 2 2 . 
            . . . 2 2 f f f f f f 2 2 . . . 
            . . . . f 2 2 f f 2 2 f . . . . 
            . . . f f 1 4 2 2 4 1 f f . . . 
            . . f f f 2 2 f f 2 2 f f f . . 
            . . f 2 2 f f f f f f 2 2 f . . 
            . 2 2 . . . . . . . . . . 2 2 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.I_hate_black)
        I_hate.setPosition(randint(0, 160), randint(0, 120))
    }
})
game.onUpdateInterval(500, function () {
    info.changeScoreBy(1)
    if (Math.percentChance(33.3)) {
        yellow_slime = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 1 f 5 5 f 1 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Yellow)
        yellow_slime.follow(mySprite, 75)
        yellow_slime.setPosition(randint(0, 160), randint(0, 120))
    }
    if (Math.percentChance(33.3)) {
        green_slime = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 1 f 7 7 f 1 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Green)
        green_slime.setPosition(randint(0, 160), randint(0, 120))
        green_slime.follow(mySprite, 50)
    }
    if (Math.percentChance(33.3)) {
        black_slime = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f 1 4 f f 4 1 f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.black)
        black_slime.follow(mySprite, 30)
        green_slime.setPosition(randint(0, 160), randint(0, 120))
    }
})
