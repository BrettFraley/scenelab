(() => {
    const canvas = document.getElementById('scene-lab-main-canvas');
        const ctx = canvas.getContext('2d');
      
        function resizeCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
      
        let time = 0;
        const gridSize = 50;
      
        function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          time += 0.01;
      
          for (let x = 0; x < canvas.width; x += gridSize) {
            for (let y = 0; y < canvas.height; y += gridSize) {
              ctx.save();
              ctx.translate(x + gridSize / 2, y + gridSize / 2);
              ctx.rotate(Math.sin(time + x * 0.01 + y * 0.01) * Math.PI);
              ctx.strokeStyle = '#0ff';
              ctx.lineWidth = 2;
              ctx.strokeRect(-gridSize / 4, -gridSize / 4, gridSize / 2, gridSize / 2);
              ctx.restore();
            }
          }
      
          requestAnimationFrame(draw);
        }
      
        draw();
})();
        
