let webdriver = require('selenium-webdriver')
let By = webdriver.By
let until = webdriver.until
let driver = new webdriver.Builder().forBrowser('firefox').build()

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

it("searches for web driver", () => {


  return driver.then(driver => {
    driver.get('http://www.google.com/ncr')
    driver.findElement(By.name('q')).sendKeys('webdriver')
    driver.findElement(By.name('btnG')).click()

    driver.wait(until.titleIs('webdriver - Google Search'), 2000)

    return driver.getTitle().then(title => {
      expect(title).toEqual("webdriver - Google Search")
    })
  })
})

afterAll(() => { driver.quit() })
