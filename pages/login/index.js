export default () => {
    const container = document.createElement('div');

    const template = `
    <form class="form">
    <label>E-mail:</label>
    <input type="text" id="input" />
    <label>Senha:</label>
    <input type="text" id="senha"/>
    <button id="button">Login</button>    
    </form>`

    container.innerHTML = template;

    return container;
   
}