import React from 'react';


function Keys() {
  return (
    <div>
      <h1>Ключи</h1>

      <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>
      <pre>{`
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
`}</pre>

      <p>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:</p>
      <pre>{`
const todoItems = todos.map((todo) =>
<li key={todo.id}>
  {todo.text}
</li>
);
`}</pre>

      <p>Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ:</p>
      <pre>{`
const todoItems = todos.map((todo, index) =>
// Делайте так, только если у элементов массива нет заданного ID
<li key={index}>
  {todo.text}
</li>
);
`}</pre>

      <p>Мы не рекомендуем использовать индексы как ключи, если порядок элементов может поменяться. Это негативно скажется на производительности и может вызвать проблемы с состоянием компонента. Почитайте статью Робина Покорни (Robin Pokorny), которая объясняет, почему индексы-ключи приводят к проблемам. Если вы опустите ключ для элемента в списке, то React по умолчанию будет использовать индексы как ключи.</p>

      <p>Вот подробное объяснение о том, почему ключи необходимы.</p>

      <h2>Извлечение компонентов с ключами</h2>
      <p>Ключи нужно определять непосредственно внутри массивов.</p>
      <p>Например, если вы извлекаете компонент ListItem, то нужно указывать ключ для ListItem/ в массиве, а не в элементе li внутри самого ListItem.</p>
      <h3>Пример неправильного использования ключей</h3>
      <pre>{`
function ListItem(props) {
    const value = props.value;
    return (
      // Неправильно! Нет необходимости задавать здесь ключ:
      <li key={value.toString()}>
        {value}
      </li>
    );
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Неправильно! Ключ необходимо определить здесь:
      <ListItem value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
`}</pre>
      <h3>Пример правильного использования ключей</h3>
      <pre>{`
function ListItem(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Правильно! Ключ нужно определять внутри массива:
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
`}</pre>
      <p>Как правило, элементам внутри map() нужны ключи.</p>

      <h2>Ключи должны быть уникальными среди соседних элементов</h2>
      <p>Ключи внутри массива должны быть уникальными только среди своих соседних элементов. Им не нужно быть уникальными глобально. Можно использовать один и тот же ключ в двух разных массивах.</p>
      <pre>{`
function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
    {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
  ];
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Blog posts={posts} />);
`}</pre>
      <p>Ключи служат подсказками для React, но они никогда не передаются в ваши компоненты. Если в компоненте нужно то же самое значение, то передайте его явно через проп с другим именем:</p>
      <pre>{`
const content = posts.map((post) =>
<Post
  key={post.id}
  id={post.id}
  title={post.title} />
);
`}</pre>
      <p>В примере выше компонент Post может прочитать значение props.id, но не props.key.</p>

      <h2>Встраивание map() в JSX</h2>
      <p>В примерах выше мы отдельно определяли переменную listItems и вставляли её в JSX:</p>
      <pre>{`
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
`}</pre>
      <p>JSX позволяет встроить любое выражение в фигурные скобки, так что мы можем включить результат выполнения map():</p>
      <pre>{`
function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }
`}</pre>
      <p>Иногда это приводит к более чистому коду, но бывает и наоборот. Как и в любом JavaScript-коде, вам придётся самостоятельно решать, стоит ли извлекать код в переменную ради читабельности. Не забывайте, что если код внутри map() слишком громоздкий, имеет смысл извлечь его в отдельный компонент.</p>



    </div>
  )
}
export default Keys;