window.addEventListener('message', (event) => {
    const data = event.data;
    if (data.action === 'toggleUI') {
        const ui = document.querySelector('.container');
        ui.style.display = data.state ? 'flex' : 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#closeBtn')?.addEventListener('click', () => {
        fetch(`https://${GetParentResourceName()}/closeUI`, {
            method: 'POST'
        });
    });
});