sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    hotdog.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.startCountdown(10)
})
let hotdog: Sprite = null
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . 3 3 3 3 f f f f 3 3 3 3 . . 
. . 3 3 3 3 f f f f 3 3 3 3 . . 
. . 3 3 3 3 f f f f 3 3 3 3 . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . 3 3 3 . . . . 3 3 3 . . . 
. . . 3 3 3 . . . . 3 3 3 . . . 
. . . 3 3 3 . . . . 3 3 3 . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
hotdog = sprites.create(img`
. . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . 
. . . . . . . . . . . b b 6 6 6 6 3 3 3 3 b a a . . . . . . . . 
. . . . . . . . . b b 3 3 6 7 7 7 6 3 3 3 6 6 3 a a . . . . . . 
. . . . . . . . b 3 3 3 3 3 8 8 8 3 3 3 3 8 9 6 3 3 a a . . . . 
. . . . . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 8 9 6 3 3 a a . . . 
. . . . . . b 3 4 4 4 3 3 3 3 3 3 3 3 3 3 3 3 8 6 3 3 b a e . . 
. . . . . b 3 4 5 5 4 3 3 3 3 3 3 3 3 3 3 4 4 4 3 3 3 3 a e . . 
. . . . b 3 3 3 2 2 3 3 3 d d d d 3 3 3 3 4 5 5 2 3 3 d a e e . 
. . . b 3 d 3 3 3 3 3 3 d d 3 b b b b 3 3 3 2 2 3 3 3 d a b e . 
. . b 3 d 3 3 3 3 3 3 d 3 b b 3 3 b b 3 3 3 3 3 3 3 3 d a 4 e . 
. . b d 3 3 3 3 3 3 3 3 b 3 3 a a b 3 3 3 3 3 3 3 2 2 3 a 4 e e 
. b 3 d 3 6 6 3 3 3 3 b 3 3 a a b 3 3 3 6 6 3 3 2 4 4 2 b 4 e e 
. b d 3 b 9 8 3 3 3 3 a 3 a a 3 3 3 3 3 8 7 6 3 3 e e 3 b 4 e e 
. b d 6 9 8 3 3 3 3 b a a a 3 3 3 3 3 3 3 8 7 6 3 3 b b 4 b e e 
b 3 d 6 8 3 3 3 3 3 b b a 3 3 3 3 3 3 3 3 3 8 6 3 b a 4 4 e b e 
b d d 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 4 4 b e b e 
a d d 6 6 6 6 3 3 3 3 3 3 2 2 3 3 3 3 6 6 3 3 3 b a 4 4 b b b e 
a d 6 7 7 7 6 3 3 3 3 3 2 4 4 2 3 3 6 9 8 3 d 3 a 4 4 4 b 4 e . 
a d d 8 8 8 b 3 3 3 3 3 3 e e 3 3 6 9 8 3 3 d 3 a 4 4 b 4 4 e . 
a d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 6 8 3 3 d 3 a 4 4 4 b 4 e . . 
a 3 d d 3 3 3 3 3 4 4 4 3 3 3 3 3 d d d d 3 a 4 4 4 b 4 4 e . . 
a b 3 3 d d d 3 2 5 5 4 3 3 3 3 d d 3 3 a a 4 4 4 b 4 4 e . . . 
. e a b b 3 d d 3 2 2 3 3 3 3 3 b a a a 4 4 4 4 b 4 4 e . . . . 
. e b a b b 3 d 3 3 3 d 3 3 b a a 4 4 4 4 4 3 b 4 4 e . . . . . 
. . e b a a b 3 d d d 3 a a a 4 4 4 4 4 3 3 b 4 4 e . . . . . . 
. . e e b b a a b 3 3 a 4 4 4 4 4 3 3 3 b 4 4 4 e . . . . . . . 
. . . e e e b b a a b 4 4 4 b 3 3 3 b 4 4 4 4 e . . . . . . . . 
. . . . e b e e e b b b b b b b b 4 4 4 4 e e . . . . . . . . . 
. . . . . e e b b b b 4 4 4 4 4 4 4 4 e e . . . . . . . . . . . 
. . . . . . . e e e b b b 4 4 4 e e e . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
