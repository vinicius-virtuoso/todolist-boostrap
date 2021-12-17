const btnAdd = document.querySelector('#btnAdd');
const list = document.querySelector('.list');
const tarefa = document.querySelector('.tarefa');
const error = document.querySelector('.p-error');

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (tarefa.value === '') {
    tarefa.classList.add('invalid')
    error.classList.remove('d-none')
  } else {
    tarefa.classList.remove('invalid')
    error.classList.add('d-none')
    console.log('valido')
    const li = document.createElement('li');
    li.classList.add('form-check');
    li.classList.add('fs-4');
    li.classList.add('my-3');
    li.classList.add('d-flex');
    li.classList.add('align-center');
    li.innerHTML = `
        <input class="form-check-input btn-outline-primary tarefa-check" type="checkbox" value=${tarefa.value} id=${tarefa.value}>
        <label class="form-check-label lh-sm ms-2 text-uppercase" role='button' for=${tarefa.value}>${tarefa.value}</label>`;
    tarefa.value = "";
    list.insertBefore(li, list.firstChild);
  }
})