var bird = {
    bird: [imgs.bird0, imgs.bird1], //水平
    up_bird: [imgs.up_bird0, imgs.up_bird1], //向上
    down_bird: [imgs.down_bird0, imgs.down_bird1], //向下
    posX: 100,
    posY: 200,
    speed: 0,
    wave: 0, //翅膀切换资源
    alive: false,

    //地面位置395，坠落速度1，坠落速度过快6，地面移动速度3

    //绘制小鸟
    draw: function(bird) {
        ctx.drawImage(bird, this.posX, this.posY);
    },
    //飞行中
    fly: function() {
        //纵向绘制位置=纵向绘制位置 + 移动速度
        this.posY += this.speed;
        this.speed++;
        //坠地GANEOVER
        if (this.posY >= 395) {
            this.speed = 0;
            this.draw(this.bird[this.wave]);
            this.dead();
        }
        //撞顶回弹
        if (this.posY <= 0) {
            this.speed = 6;
        }
        //控制鸟的朝向
        if (this.speed > 0) {
            this.draw(this.down_bird[this.wave]);
        } else if (this.speed < 0) {
            this.draw(this.up_bird[this.wave]);
        } else {
            this.draw(this.bird[this.wave]);
        }
        //下落速度过大则开启控制
        if (bird.speed > 6) {
            bird.speed = 6;
        }
    },
    //煽动翅膀，切换图片
    wingWave: function() {
        this.wave++;
        if (this.wave > 1) {
            this.wave = 0;
        }
    },
    //完蛋
    dead: function() {
        this.alive = false;
    }
}