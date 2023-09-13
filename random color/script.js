const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
      const body = document.querySelector('body')
    const randomColor = () =>{
      const hex = '0123456789ABCDEF';
      let color = '#';
      for(let i = 0;i < 6;i++){
        color+=hex[Math.floor(Math.random()*16)]
      }

      return color;
    };
    let colorInterval 
   
    const changeColor =() =>{
       colorInterval = setInterval(()=>{body.style.backgroundColor = randomColor()},1000)
    }

    const stopColor = () =>{
     clearInterval(colorInterval)
     colorInterval = null      
    }

    start.addEventListener('click',changeColor)
    stop.addEventListener('click',stopColor)
     