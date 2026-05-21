// Navegação entre abas
const abas = document.querySelectorAll('.nav-Item');

const conteudoFaltas =
  document.querySelector('.conteudo-faltas');

// cria mensagem de erro
const erro = document.createElement('div');

erro.classList.add('mensagem-erro');

erro.innerHTML = `
  <h2>Erro</h2>
  <p>Esse módulo ainda não está disponível.</p>
`;

conteudoFaltas.parentNode.appendChild(erro);

// começa escondido
erro.style.display = 'none';

abas.forEach(item => {

  item.addEventListener('click', function () {

    // remove active
    abas.forEach(i =>
      i.classList.remove('active')
    );

    // adiciona active
    this.classList.add('active');

    // nome da aba
    const nome =
      this.textContent.trim();

    // verifica se é faltas
    if(nome === 'Faltas'){

      conteudoFaltas.style.display = 'block';
      erro.style.display = 'none';

    }else{

      conteudoFaltas.style.display = 'none';
      erro.style.display = 'flex';

    }

  });

});

// Toggle do menu
const btn = document.getElementById('btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {

  btn.classList.toggle('show');
  menu.classList.toggle('show');

  const isExpanded =
    btn.getAttribute('aria-expanded') === 'true';

  btn.setAttribute(
    'aria-expanded',
    !isExpanded
  );

});