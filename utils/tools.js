export function circleCavas (name, num) {
      let canvas = document.getElementById(name)  // 获取canvas元素
      let context = canvas.getContext('2d')  // 获取画图环境，指明为2d
      let centerX = canvas.width / 2   // Canvas中心点x轴坐标
      let centerY = canvas.height / 2  // Canvas中心点y轴坐标
      let rad = Math.PI * 2 / 100 // 将360度分成100份，那么每一份就是rad度
      let speed = 1  // 加载的快慢就靠它了
      // 绘制蓝色外圈
      function blueCircle (n) {
        context.save()
        var gradient = context.createLinearGradient(0, 0, 200, 200)
        gradient.addColorStop(0, '#f8c44f')
        gradient.addColorStop(0.5, '#f67857')
        gradient.addColorStop(1.0, '#f32e5e')
        context.strokeStyle = gradient // 设置描边样式
        context.lineWidth = 10 // 设置线宽
        context.lineCap = 'round'
        context.beginPath() // 路径开始
        context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false) // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke() // 绘制
        context.closePath() // 路径结束
        context.restore()
      }
      // 绘制白色外圈
      function whiteCircle () {
        context.save()
        context.beginPath()
        context.strokeStyle = '#d4d4d4'
        context.arc(centerX, centerY, 100, 0, Math.PI * 2, false)
        context.stroke()
        context.closePath()
        context.restore()
      }
      // 百分比文字绘制
      function text (n) {
        context.save() // save和restore可以保证样式属性只运用于该段canvas元素
        context.strokeStyle = '#000' // 设置描边样式
        context.font = '40px Arial' // 设置字体大小和字体
        // 绘制字体，并且指定位置
        context.strokeText(n.toFixed(0) + '%', centerX - 25, centerY + 10)
        context.stroke() // 执行绘制
        context.restore()
      }
      // 动画循环
      (function drawFrame () {
        window.requestAnimationFrame(drawFrame, canvas)
        context.clearRect(0, 0, canvas.width, canvas.height)
        whiteCircle()
        text(speed)
        blueCircle(speed)
        if (speed > num) return
        speed += 1
      }())
    }

     