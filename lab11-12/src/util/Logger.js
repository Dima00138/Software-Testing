const fs = require('fs');
class Logger{
    async MessageLog(message){
        let date = new Date();
        console.log("Date: ",date," | Message: ", message);
    }
    async TakeScreenshot(driver){
        // Если тест не прошел, делаем скриншот
        let screenshot = await driver.takeScreenshot();
        // Получаем текущую дату и время
        let date = new Date();
        let timestamp = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '_' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds();
        // Записываем скриншот в файл
        fs.writeFileSync('Report/screenshot_' + timestamp + '.png', screenshot, 'base64');
    }
}

module.exports = new Logger();