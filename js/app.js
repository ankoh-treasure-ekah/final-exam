var btn = document.getElementsByClassName('btn-nav');
var btn_default = document.getElementById('list');

btn_default.className += ' active';

for(i=0; i<btn.length; i++) {
    
    btn[i].addEventListener('click', function(){
        for(i=0; i<btn.length; i++) {
            btn[i].className = btn[i].className.replace(' active', "");
        }
        
        console.log('yes');
        this.className += ' active';
    })
}
