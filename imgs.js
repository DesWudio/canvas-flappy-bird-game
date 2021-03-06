var imgs = {
    //定义图片
    bg: new Image(),
    grass: new Image(),
    title: new Image(),
    bird0: new Image(),
    bird1: new Image(),
    up_bird0: new Image(),
    up_bird1: new Image(),
    down_bird0: new Image(),
    down_bird1: new Image(),
    startBtn: new Image(),
    up_pipe: new Image(),
    up_mod: new Image(),
    down_pipe: new Image(),
    down_mod: new Image(),
    scroe0: new Image(),
    scroe1: new Image(),
    scroe2: new Image(),
    scroe3: new Image(),
    scroe4: new Image(),
    scroe5: new Image(),
    scroe6: new Image(),
    scroe7: new Image(),
    scroe8: new Image(),
    scroe9: new Image(),
    gameover: new Image(),
    message: new Image(),
    okbtn: new Image(),

    //加载资源
    loadImg: function(Start) {
        this.bg.src = './img/bg.jpg';
        this.grass.src = './img/banner.jpg';
        this.title.src = './img/head1.png';
        this.bird0.src = './img/bird0.png';
        this.bird1.src = './img/bird1.png';
        this.up_bird0.src = './img/up_bird0.png';
        this.up_bird1.src = './img/up_bird1.png';
        this.down_bird0.src = './img/down_bird0.png';
        this.down_bird1.src = './img/down_bird1.png';
        this.startBtn.src = './img/start.jpg';
        this.up_pipe.src = './img/up_pipe.png';
        this.up_mod.src = './img/up_mod.png';
        this.down_pipe.src = './img/down_pipe.png';
        this.down_mod.src = './img/down_mod.png';
        this.scroe0.src = './img/0.jpg';
        this.scroe1.src = './img/1.jpg';
        this.scroe2.src = './img/2.jpg';
        this.scroe3.src = './img/3.jpg';
        this.scroe4.src = './img/4.jpg';
        this.scroe5.src = './img/5.jpg';
        this.scroe6.src = './img/6.jpg';
        this.scroe7.src = './img/7.jpg';
        this.scroe8.src = './img/8.jpg';
        this.scroe9.src = './img/9.jpg';
        this.gameover.src = './img/game_over.png';
        this.message.src = './img/message.jpg';
        this.okbtn.src = './img/ok.jpg';
        var that = this;
        var timer = setInterval(function() { //等待全部加载
            if (that.bg.complete && that.grass.complete &&
                that.title.complete && that.startBtn.complete &&
                that.bird0.complete && that.bird1.complete &&
                that.up_bird0.complete && that.up_bird1.complete &&
                that.down_bird0.complete && that.down_bird1.complete &&
                that.up_pipe.complete && that.up_mod.complete &&
                that.down_mod.complete && that.down_pipe.complete &&
                that.scroe0.complete && that.scroe1.complete &&
                that.scroe2.complete && that.scroe3.complete &&
                that.scroe4.complete && that.scroe5.complete &&
                that.scroe6.complete && that.scroe7.complete &&
                that.scroe8.complete && that.scroe9.complete &&
                that.okbtn.complete && that.message.complete &&
                that.gameover.complete) {
                clearInterval(timer); //结束判断
                Start(); //加载主菜单，跳至startLayer函数
            }
        }, 50)
    }
}