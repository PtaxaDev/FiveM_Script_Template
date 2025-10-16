let uiOpen = false;

setTick(() => {
    if (IsControlJustPressed(0, 244)) { // M
        toggleUI();
    }
});

function toggleUI() {
    uiOpen = !uiOpen;

    SetNuiFocus(uiOpen, uiOpen);
    SendNuiMessage(JSON.stringify({
        action: 'toggleUI',
        state: uiOpen
    }));

    emit('chat:addMessage', {
        args: [`UI ${uiOpen ? 'открыт' : 'закрыт'}`]
    });
}

// Когда NUI отправляет "closeUI"
RegisterNuiCallbackType('closeUI');
on('__cfx_nui:closeUI', () => {
    uiOpen = false;
    SetNuiFocus(false, false);
    SendNuiMessage(JSON.stringify({
        action: 'toggleUI',
        state: false
    }));
});