// Usuários de teste (crie novos usuários conforme necessário)
const users = [
    { username: 'admin', password: '123456', role: 'Administrador'},
    { username: 'rh', password: 'rh123', role: 'RH' },
    { username: 'gestor', password: 'gestor123', role: 'Gestor' },
    { username: 'colaborador', password: 'colab2023', role: 'Colaborador' },
    { username: 'alexandre.ricardo', password: 'gerente123' , role: 'Gerente' , name: 'Alexandre'},
  ];
  
  // Seleção de elementos
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  
  // Evento de envio do formulário
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Obtém valores dos campos
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Verifica o login nos usuários de teste
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      // Redireciona ao dashboard com o nome e papel na query string
      window.location.href = `dashboard.html?username=${user.username}&role=${user.role}`;
    } else {
      // Exibe mensagem de erro
      loginError.classList.remove('hidden');
    }
  });
  
  console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});