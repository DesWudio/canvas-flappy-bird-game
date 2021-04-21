//游戏内同时存在多个管子对象，故用类定义
// 从上方（朝下的管子）来计算和绘制管子

// 上下管子间隔60，管子移动速度-6，

class Pipe {
    constructor(up_pipe, up_mod, down_pipe, down_mod) {
            this.up_pipe = up_pipe; //朝下管子头
            this.up_mod = up_mod; //朝下管子复用模块
            this.down_pipe = down_pipe;
            this.down_mod = down_mod;
            this.up_height = Math.floor(Math.random() * 60); //上方高度，用60控制生成范围
            //this.up_height = Math.floor(0.5 * 60); //固定高度测试
            this.down_height = (60 - this.up_height) * 3;
            this.posX = 300;
            this.up_posY = this.up_height * 3 + this.up_pipe.height; //朝上的管子头纵向绘制位置
            this.down_posY = 362 - this.down_height;
            this.hadSkipped = false; //通过标志
            this.hadSkippedChange = false; //计分标志（防止通过后分数保持++）
        }
        //管头
    drawPipe() {
            ctx.drawImage(this.up_pipe, this.posX, this.up_height * 3);
            ctx.drawImage(this.down_pipe, this.posX, 362 - this.down_height);
        }
        //管身
    drawMods() {
            for (var i = 0; i < this.up_height; i++) { //用循环遍历全部高度
                ctx.drawImage(this.up_mod, this.posX, i * 3)
            }
            for (var j = 0; j < this.down_height; j++) {
                ctx.drawImage(this.down_mod, this.posX, 362 - this.down_height + this.down_pipe.height + j);
            }
        }
        //向左移动
    move() {
        this.posX -= 6; //速度
        this.drawMods();
        this.drawPipe();
    }
}