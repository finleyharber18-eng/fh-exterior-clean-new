
const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const button=form.querySelector('button[type="submit"]');
    if(button){button.textContent='REQUEST RECEIVED';button.disabled=true;}
    const note=form.querySelector('.form-note');
    if(note) note.textContent='Thanks — this demo form is ready to connect to your email/form service when you launch.';
  });
});
