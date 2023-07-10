/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class ContainerGame {
  constructor(element) {
    this.element = element;
    this._items = this.element.querySelectorAll('.container-item');
    this.countUser = document.querySelector('.count-user');
    this.countBot = document.querySelector('.count-bot');
    this.clickedOnItem = false;
    this.onclickItem = this.onclickItem.bind(this);

    this._items.forEach((item) => {
      item.addEventListener('click', this.onclickItem);
    });
  }

  create() {
    let randomIndex = this.random();
    const containerItem = Array.from(this._items);
    containerItem.forEach((item, index) => {
      if (item.classList.contains('active') && randomIndex === index) {
        randomIndex = this.random();
      }
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    containerItem[randomIndex].classList.add('active');
    if (!this.clickedOnItem) {
      this.count(this.countBot);
    }
    this.clickedOnItem = false;
    this.finish('5');
  }

  random() {
    return Math.floor(Math.random() * 15);
  }

  count(e) {
    e.textContent = ++e.textContent;
  }

  finish(num) {
    if (this.countUser.textContent === num) {
      alert('Ты победил!');
      this.countUser.textContent = 0;
      this.countBot.textContent = 0;
    }
    if (this.countBot.textContent === '6') {
      alert('Ты проиграл!');
      this.countUser.textContent = 0;
      this.countBot.textContent = 0;
    }
  }

  onclickItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('active')) {
      this.count(this.countUser);
      this.clickedOnItem = true;
      e.target.classList.remove('active');
    }
  }
}
