/*
1. Find the Wumpus account by checking latest joins on the discord server
2. Using help we got the "help" dashboard
3. We could use 3 commands: hello (Say Hello), ping (Check latency), flag (Challenge command)
4. Write the code (or copy it) into devtool from Chrome
5. When you send "flag" to the account, you get a random time to send "flag" back. For example: Sending message at 19:33:00 and you get 19:34:03.495
6. So before sending that, write "timeoutMessage('');" in your Chrome console to have more delay to copy the time on the message.
7. Send "flag" and write back "flag" into the text box, and fill the function : timeoutMessage('19:34:03.495'); & press Enter.
8. Wait for it. If it is too late, check your connection and try back :p
*/

function timeoutMessage(time) {
    var targetTime = new Date();
    var [hours, minutes, seconds] = time.split(':').map(Number);
    var [seconds2, milliseconds] = String(seconds).split('.').map(Number);
    targetTime.setHours(hours, minutes, seconds2, milliseconds);

    var now = new Date();
    var delay = targetTime - now;

    if (delay <= 0) {
        console.error("Wrong time.");
        return;
    }

    const textarea = document.querySelector('div[role="textbox"][contenteditable="true"]');

    setTimeout(() => {
        const enterEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13
            });
            textarea.dispatchEvent(enterEvent);
    }, delay);
    
}
