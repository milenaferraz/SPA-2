export default () => {
    const container = document.createElement('div');

    const template = `
    <h2>About</h2>
    <p>Sint excepteur aliquip Lorem duis deserunt nostrud duis fugiat esse veniam sit sint.<p>
    <p>Aliquip incididunt dolor esse consequat sint anim eu esse tempor laboris non consequat dolore ad. Duis esse eiusmod dolore eu excepteur dolore magna officia sint pariatur velit ad. Do ipsum amet elit proident labore incididunt reprehenderit et.

    Nostrud nulla dolore exercitation ex non magna elit est commodo laboris exercitation mollit consequat. Ipsum velit sunt dolore laborum duis dolor. Id pariatur proident Lorem eiusmod et. Ut laboris sint excepteur sit irure.
    </p>`

    container.innerHTML = template;

    return container;
   
}