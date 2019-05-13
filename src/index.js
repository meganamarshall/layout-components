import styles from './index.css';
const rootDiv = document.getElementById('root');

const dogList = document.createElement('ul');
dogList.className = styles.dogs;

const header = document.createElement('h1');
header.textContent = 'my cute dogs';

const dogs = ['spot', 'rover', 'bingo', 'joe'];

rootDiv.appendChild(header);
rootDiv.appendChild(dogList);

dogs.forEach(dog => {
  const dogLi = document.createElement('li');
  dogLi.textContent = dog;
  dogList.appendChild(dogLi);
});


