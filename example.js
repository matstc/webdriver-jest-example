let webdriver = require('selenium-webdriver')
let By = webdriver.By
let until = webdriver.until

let driver = new webdriver.Builder().forBrowser('firefox').build().then(driver => {

  driver.get('http://www.google.com/ncr')
  driver.findElement(By.name('q')).sendKeys('webdriver')
  driver.findElement(By.name('btnG')).click()
  driver.wait(until.titleIs('webdriver - Google Search'), 1000)

  console.log(`The title of the page is ${driver.getTitle()}`)

  driver.quit()
})

