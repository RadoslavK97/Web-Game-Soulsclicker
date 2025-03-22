const bonfire = document.querySelector('#bonfire');
const counter = document.querySelector('#counter');
const multiplier = document.querySelector('#multiplier');
const soulsTab = document.querySelector('#souls-tab');
const smallEstusBtn = document.querySelector('#smallEstus');
const largeEstusBtn = document.querySelector('#largeEstus');
const humanityBtn = document.querySelector('#humanity');
const emberBtn = document.querySelector('#ember');
const popup1 = document.querySelector('#popup1');
const popup2 = document.querySelector('#popup2');
const popup3 = document.querySelector('#popup3');
const popup4 = document.querySelector('#popup4');
const buttons = document.querySelector('#powerups');


document.addEventListener('DOMContentLoaded', () => {
    let count = parseFloat(counter.innerText);
    let mult = parseFloat(multiplier.innerText);

    if (count === 0) {
        counter.innerText = `${count} souls`;
    }

    const updateTitle = () => {
        document.title = `Souls Clicker - ${count.toLocaleString()} souls`;
    };

    if(!smallEstusBtn.disabled&& !largeEstusBtn.disabled && !humanityBtn.disabled && !emberBtn.disabled){
        multiplier.innerText = `${mult.toLocaleString()} souls per second`
    }

    bonfire.addEventListener('click', () => {
        count++;
        count <= 1 ? counter.textContent = `${count.toLocaleString()} soul` : counter.textContent = `${count.toLocaleString()} souls`;
        updateTitle();
    });

    smallEstusBtn.addEventListener('click', () => {
        if (count >= 50 && !smallEstusBtn.disabled) {
            // smallEstusBtn.disabled = true; // Disable the button after click
            mult+=2;
            count-=50;
            setInterval(() => {
                count += 2;
                counter.textContent = `${count.toLocaleString()} souls`;
                multiplier.textContent = `${mult.toLocaleString()} souls per second`
                updateTitle();
            }, 1000); // Update count every 1 second
        }
    });

    largeEstusBtn.addEventListener('click', () => {
        if (count >= 300 && !largeEstusBtn.disabled) {
            // largeEstusBtn.disabled = true; // Disable the button after click
            mult+=5;
            count-=300;
            setInterval(() => {
                count += 5;
                counter.textContent = `${count.toLocaleString()} souls`;
                multiplier.textContent = `${mult.toLocaleString()} souls per second`
                updateTitle();
            }, 1000); // Update count every 1 second
        }
    });

    humanityBtn.addEventListener('click', () => {
        if (count >= 1000 && !humanityBtn.disabled) {
            // humanityBtn.disabled = true; // Disable the button after click
            mult+=20;
            count-=1000;
            setInterval(() => {
                count += 20;
                counter.textContent = `${count.toLocaleString()} souls`;
                multiplier.textContent = `${mult.toLocaleString()} souls per second`
                updateTitle();
            }, 1000); // Update count every 1 second
        }
    });

    emberBtn.addEventListener('click', () => {
        if (count >= 5000 && !emberBtn.disabled) {
            // emberBtn.disabled = true; // Disable the button after click
            mult+=50;
            count-=5000;
            setInterval(() => {
                count += 50;
                counter.textContent = `${count.toLocaleString()} souls`;
                multiplier.textContent = `${mult.toLocaleString()} souls per second`
                updateTitle();
            }, 1000); // Update count every 1 second
        }
    });
    smallEstusBtn.addEventListener('mouseenter', (event) => {
        
        popup1.style.display = 'block';
        popup1.style.left = `${event.pageX + 10}px`;
        popup1.style.top = `${event.pageY + 10}px`;
    });

    smallEstusBtn.addEventListener('mouseleave', () => {
        popup1.style.display = 'none';
    });
    largeEstusBtn.addEventListener('mouseenter', (event) => {
    
        popup2.style.display = 'block';
        popup2.style.left = `${event.pageX + 10}px`;
        popup2.style.top = `${event.pageY + 10}px`;
    });
    
    largeEstusBtn.addEventListener('mouseleave', () => {
        popup2.style.display = 'none';
    });
    
    humanityBtn.addEventListener('mouseenter', (event) => {
        
        popup3.style.display = 'block';
        popup3.style.left = `${event.pageX + 10}px`;
        popup3.style.top = `${event.pageY + 10}px`;
    });
    
    humanityBtn.addEventListener('mouseleave', () => {
        popup3.style.display = 'none';
    });
    
    emberBtn.addEventListener('mouseenter', (event) => {
       
        popup4.style.display = 'block';
        popup4.style.left = `${event.pageX + 10}px`;
        popup4.style.top = `${event.pageY + 10}px`;
    });
    
    emberBtn.addEventListener('mouseleave', () => {
        popup4.style.display = 'none';
    });
});
