import React from 'react';

function Props() {
  return (
    <div>
      <h1>Композиция компонентов</h1>
      <p>Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это позволяет нам использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения. Неважно, пишем ли мы кнопку, форму или целый экран: все они, как правило, представляют собой компоненты в React-приложениях.</p>
      <p>Например, компонент App может отрендерить компонент Welcome несколько раз:</p>
      <pre>{`
function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Алиса" />
        <Welcome name="Базилио" />
        <Welcome name="Буратино" />
      </div>
    );
  }
`}</pre>
      <p>В приложениях, написанных на React с нуля, как правило, есть один компонент App, который находится на самом верху. В случае, если вы переписываете существующее приложение на React, имеет смысл начать работу с маленького компонента типа Button и постепенно двигаться «вверх» по иерархии.</p>

      <h2>Извлечение компонентов</h2>
      <p>Не бойтесь разбивать компоненты на части.</p>
      <p>Допустим, у нас есть компонент Comment:</p>
      <pre>{`
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
`}</pre>

      <p>Этот компонент представляет собой комментарий в социальной сети. Его пропсы включают в себя author (объект), text (строка), и date (дата).</p>
      <p>С этим компонентом может быть не очень удобно работать из-за излишней вложенности. Мы также не можем повторно использовать его составные части. Давайте извлечём из него пару компонентов.</p>
      <p>Для начала извлечём Avatar:</p>
      <pre>{`
function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
`}</pre>
      <p>Компоненту Avatar незачем знать, что он рендерится внутри Comment. Поэтому мы дали его пропу чуть менее конкретное имя — user, а не author.</p>
      <p>Пропсы следует называть так, чтобы они имели смысл в первую очередь с точки зрения самого компонента, а уже во вторую тех компонентов, которые его рендерят.</p>
      <p>Теперь можно немножко упростить наш Comment:</p>
      <pre>{`
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
`}</pre>
      <p>Следующим шагом извлечём компонент UserInfo, который рендерит Avatar рядом с именем пользователя:</p>
      <pre>{`
function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }
`}</pre>
      <p>Это позволит ещё сильнее упростить Comment:</p>
      <pre>{`
function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
`}</pre>
      <p>Извлечение компонентов может сначала показаться неблагодарной работой. Тем не менее, в больших приложениях очень полезно иметь палитру компонентов, которые можно многократно использовать. Если вы не уверены, извлекать компонент или нет, вот простое правило. Если какая-то часть интерфейса многократно в нём повторяется (Button, Panel, Avatar) или сама по себе достаточно сложная (App, FeedStory, Comment), имеет смысл её вынести в независимый компонент.</p>




      <h2>Пропсы можно только читать</h2>
      <p>Компонент никогда не должен что-то записывать в свои пропсы — вне зависимости от того, функциональный он или классовый.</p>
      <p>Возьмём для примера функцию sum</p>
      <pre>{`
function sum(a, b) {
    return a + b;
  }
`}</pre>

      <p>Такие функции называют «чистыми», потому что они не меняют свои входные данные и предсказуемо возвращают один и тот же результат для одинаковых аргументов.</p>
      <p>А вот пример нечистой функции — она записывает данные в свои же аргументы:</p>
      <pre>{`
function withdraw(account, amount) {
    account.total -= amount;
  }
`}</pre>
      <p>React достаточно гибкий, но есть одно правило, которое нельзя нарушать:</p>

      <h2>React-компоненты обязаны вести себя как чистые функции по отношению к своим пропсам.</h2>

      <p>Конечно, интерфейсы приложений обычно изменяются с течением времени. В следующей главе мы узнаем о том, что такое «состояние» компонента. Состояние даёт компонентам возможность реагировать на действия пользователя, ответы сервера и другие события, не нарушая чистоту компонента.</p>

    </div>
  )
}
export default Props;