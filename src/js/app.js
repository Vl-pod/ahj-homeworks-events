import ContainerGame from './Container';

document.addEventListener('DOMContentLoaded', () => {
  const containerGame = new ContainerGame(document.querySelector('.container'));

  window.containerGame = containerGame;

  setInterval(() => {
    window.containerGame.create();
  }, 1000);
});
