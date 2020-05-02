import React from 'react';
import './welcome.styles.css'

export const Welcome = () => {
    const [disabled, setDisabled] = React.useState(false)
    const phrases = [
        "What's up??",
        "HEllooooo",
        "Greetings",
        'Welcome!',
        'HI!',
        "How's life?",
        "What cracks?!",
        "&#161;Bienvenidos!"
    ]

    React.useEffect(
        () => {
            let spot = document.querySelector('.spot');
            spot.addEventListener('onanimationend', clearIt())
        }, []
    )
    const createRandomColor = () => {
        let num;
        let alpha = ['a', 'b', 'c', 'd', 'e', 'f']
        let answer = new Array(6);
        for (let i = 0; i<answer.length; i++) {
          num = Math.floor(Math.random()*15);
          if (num < 10) {
            answer[i] = num
          } else {
            num = num-10;
            answer[i] = alpha[num];
          }
        }
        return answer.join('').toString();
      }

      function addSpot(event) {
        let counter = 0;
        let num = Math.floor(Math.random()*phrases.length);
        let num1 = Math.floor(Math.random()*90-45);
        function exec() {
        if (disabled === false) {
            let spot = document.querySelector('.spot');
            let newNode = spot.cloneNode(true);
            newNode.style.left = event.pageX+'px';
            newNode.style.top = event.pageY+'px';
            newNode.style.transform = 'rotate('+ num1 +'deg)';
            newNode.innerHTML = phrases[num];
            newNode.style['color'] = '#' + createRandomColor();
            newNode.style['animation-name'] = 'letters';
            newNode.style['animation-delay'] = '.' + counter*2 + 's';
            document.querySelector('.cleared').appendChild(newNode)
        }
        }
        while(counter<3) {
          exec();
          counter++
        }
        counter = 0;
      };
      
      function clearIt() {
        let clearArea = document.querySelector('.cleared');
        let child = clearArea.lastElementChild;  
        while (child) { 
          clearArea.removeChild(child); 
          child = clearArea.lastElementChild; 
        }
      }
      
    return(
        <div className = 'whole-thing' onClick={addSpot}>
            <div className="spot">
            </div>
            <div className="cleared" >
            </div>
            <button 
                className="stop-shape" 
                onClick={clearIt}
                onMouseOver={() => setDisabled(true)}
                onMouseLeave={() => setDisabled(false)}
                >CLEAR</button>
        </div>
    )
}