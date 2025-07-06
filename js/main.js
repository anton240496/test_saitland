const menu_btn = document.querySelector('.menu_btn');
const opens = document.querySelectorAll('.open');
const header_scroll = document.querySelector('.header_scroll');
const menu1_list_title = document.querySelectorAll('.menu1_list_title');
const menu1_list = document.querySelector('.menu1_list');
const menu_item = document.querySelectorAll('.menu_item');
const menu2_item_title = document.querySelectorAll('.menu2_item_title');
const menu1_item = document.querySelectorAll('.menu1_item');
const menu3_item_title = document.querySelectorAll('.menu3_item_title');
const menu2_ober = document.querySelector('.menu2_ober');
const menu2_item = document.querySelectorAll('.menu2_item');


menu_btn.addEventListener('click', () => {
    opens.forEach(e => e.classList.toggle('open_active'));
    header_scroll.classList.toggle('header_scroll_open');
    menu_btn.classList.toggle('close')

})


const op = document.querySelector('.menu_list')
op.addEventListener('click', e => {
    const curb = e.target.closest('.menu_link')
    if (!curb) return;
    const onli = op.querySelector('.on');
    onli?.classList.remove('on')
    const curli = curb.closest('.menu_item');
    curli.classList.toggle('on', curli !== onli)
})

const op1 = document.querySelector('.menu_list')
op1.addEventListener('click', e => {
    const curb = e.target.closest('.menu1_link')
    if (!curb) return;
    const onli = op1.querySelector('.on1');
    onli?.classList.remove('on1')
    const curli = curb.closest('.menu1_item');
    curli.classList.toggle('on1', curli !== onli)
})

const op2 = document.querySelector('.menu_list')
op2.addEventListener('click', e => {
    const curb = e.target.closest('.menu2_link')
    if (!curb) return;
    const onli = op2.querySelector('.on2');
    onli?.classList.remove('on2')
    const curli = curb.closest('.menu2_item');
    const curli1 = curb.closest('.menu2_ober');
    curli.classList.toggle('on2', curli !== onli)
    curli1.classList.toggle('onm', curli !== onli)
})


menu1_list_title.forEach(e => e.addEventListener('click', () => {
    menu_item.forEach(e => e.classList.remove('on'));
}
))

menu2_item_title.forEach(e => e.addEventListener('click', () => {
    menu1_item.forEach(e => e.classList.remove('on1'));
}
))

menu3_item_title.forEach(e => e.addEventListener('click', () => {
    menu2_item.forEach(e => e.classList.remove('on2'));
}
))






