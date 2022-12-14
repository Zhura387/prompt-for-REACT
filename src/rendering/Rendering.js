import React from 'react';


function Rendering() {
  return (
    <div>
      <h1>Рендеринг элементов</h1>

      <p>Элемент описывает то, что вы хотите увидеть на экране:</p>
      <pre>{`
   const element = <h1>Hello, world</h1>;
`}</pre>

      <p>В отличие от DOM-элементов, элементы React — это простые объекты, не отнимающие много ресурсов. React DOM обновляет DOM, чтобы он соответствовал переданным React-элементам.</p>
      <p>Примечание:

        Элементы можно перепутать с более известной концепцией «компонентов». С компонентами мы ознакомимся в следующей главе. Элементы — это то, «из чего сделаны» компоненты, и мы рекомендуем вам дочитать эту главу, прежде чем двигаться дальше.</p>

      <h2>Рендеринг элемента в DOM</h2>
      <p>Допустим, в вашем HTML-файле есть :</p>

      <pre>{`
 <div id="root"></div>
`}</pre>

      <p>Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.</p>
      <p>Обычно в приложениях, написанных полностью на React, есть только один корневой элемент. При встраивании React в существующее приложение вы можете рендерить во столько независимых корневых элементов, во сколько посчитаете нужным.</p>
      <p>Для рендеринга React-элемента, сперва передайте DOM-элемент в ReactDOM.createRoot(), далее передайте с React-элементом в root.render():</p>
      <pre>{`
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const element = <h1>Hello, world</h1>;
  root.render(element);
`}</pre>
      <p>На странице будет написано «Hello, world».</p>

      <h2>Обновление элементов на странице</h2>
      <p>Элементы React иммутабельны. После создания элемента нельзя изменить его потомков или атрибуты. Элемент похож на кадр в фильме: он отражает состояние интерфейса в конкретный момент времени.</p>
      <p>Пока что, мы знаем только один способ обновить интерфейс — это создать новый элемент и передать его в root.render().</p>
      <p>Рассмотрим пример с часами:</p>
      <pre>{`
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }
  
  setInterval(tick, 1000);
`}</pre>
      <p>В этом примере root.render() вызывается каждую секунду с помощью колбэка setInterval().</p>
      <p>Примечание:

        На практике большинство React-приложений вызывают root.render() только один раз. В следующем разделе вы узнаете, как можно обновлять интерфейс при помощи компонента с состоянием.

        Мы рекомендуем не пропускать главы, поскольку каждая следующая глава опирается на знания из предыдущей.</p>



    </div>
  )
}
export default Rendering;