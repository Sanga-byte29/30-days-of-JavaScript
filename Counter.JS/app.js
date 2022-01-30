//set initials count
let count = 0;

// select values and buttons
const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        value.textContent = count;
    });
});
btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }
        value.textContent = count;
    });
});
btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('reset')){
            count = 0;
        }
        if(count > 0){
            value.style.color = 'blue';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0)
        {
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});


