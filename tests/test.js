const { Builder, Key, By } = require( 'selenium-webdriver' )



// username and access key
const USERNAME = 'jacobharv00'
const KEY = 'AtKPu6yJADdqqzoZDuGs3X6lcoutQhnB9oZDy50DMJJyeP0UVB'

// provide the host corresponding to the LambdaTest Platform
const GRID_HOST = 'hub.lambdatest.com/wd/hub'

async function searchTextOnGoogle () {
  // Setup Input capabilities
  const capabilities = {
    platform: 'Windows 10',
    browserName: 'Chrome',
    version: '92.0',
    resolution: '1024x768',
    network: true,
    visual: true,
    console: true,
    video: true,
    name: 'Google Search', // name of the test
    build: 'JavaScript and Selenium Testing' // name of the build
  }

  const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST

  // Build and instantiate the browser on the platform, build, launch properly
  const driver = await new Builder()
    .usingServer( gridUrl )
    .withCapabilities( capabilities )
    .build()

  const searchString = 'Angry Cats'

  await driver.get( 'https://google.com' )

  await driver.findElement( By.name( "q" ) ).sendKeys( searchString, Key.RETURN )

  const title = await driver.getTitle()
  console.log( 'Title is:', title )

  await driver.quit()


}

searchTextOnGoogle()






















// Pulling required functions from node_modules
// require( "chromedriver" )

// async function example () {

//   const searchString = 'Automation testing with Selenium and JavaScript'

//   // To wait for browser to build and launch properly
//   const driver = await new Builder().forBrowser( 'chrome' ).build()

//   // To fetch https://google.com from the browser with our code.
//   await driver.get( 'https://google.com' )

//   // To send a search query by passing the value in searchString
//   await driver.findElement( By.name( 'q' ) ).sendKeys( searchString, Key.RETURN )

//   // Verify the page title and print it
//   const title = await driver.getTitle()
//   console.log( 'Title is:', title )

//   // It is always a safe practice to quit the browser after execution
//   await driver.quit()

// }

// example()

// added .gitignore for node_modules