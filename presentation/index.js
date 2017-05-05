// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
  Link,
  Image
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  now: require('../assets/white-bg-logo-1200.png'),
  jrs: require('../assets/jrs-code-logo.jpg'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
}

preloader(images)

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  { primary: 'Montserrat', secondary: 'Helvetica' }
)

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={[ 'zoom', 'slide' ]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={[ 'zoom' ]} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Fun Functional Programming
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            Three functional modules that can make full stack functional programming fun!
          </Text>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            SYNTAXCON, Charleston, SC, May 19, 2017
          </Text>
        </Slide>
        <Slide transition={[ 'fade' ]} bgColor='tertiary'>
          <Heading size={6} textColor='primary' caps>Who Am I?</Heading>
          <Heading size={1} textColor='secondary'>Tom Wilson</Heading>
          <Heading size={5} textColor='secondary'>
            Chief Technology Innovation Officer
          </Heading>
          <Heading size={4} textColor='secondary'>
            Tabula Rasa HealthCare, Inc
          </Heading>
          <Heading size={5} textColor='secondary'>
            JRS Innovation Center
          </Heading>
          <Heading size={5} textColor='secondary'>JRS Coding School</Heading>
          <Text size={6} textColor='secondary' />
        </Slide>
        {MarkdownSlides`
![JRS Code](${images.jrs})

12 Week Immersive Training

Jan - May - Sept

---

> Shared Mutable state is the root of all evil... Pete Hunt Facebook

---

### Why is shared mutable state bad?

* It is easy to create bugs
* It is hard to maintain

---

### Why?

* Less Bugs
* Easier to Maintain
* JavaScript supports FP

---

### Stack

* React/Redux
* Tachyons
* Ramda
* NodeJS
* CouchDB/MySQL
* Now

---

### Talking About

* Tachyons
* Ramda
* Now

---

# Tachyons

---

### What is it?

Tachyons is like sub atomic classes that can be combined together to create components.


`}
        <Slide transition={[ 'fade' ]} bgColor='primary'>
          <Link
            target='_new'
            href='http://codepen.io/twilson63/pres/vmJwxZ?editors=0010'
          >
            <Text>Demo</Text>
          </Link>
        </Slide>
        {MarkdownSlides`

### Why?

* Design Systems break as they scale
* Systems like Tachyons et al. approach this problem by instead documenting and limiting *properties* of components. (I like to think of this as “subatomic” design.)
* Those subatomic components can be combined in thousands of ways to create hundreds of components.

---

### Tachyons

* Less context switching
* Functional and Composable
* Do the math!
          `}
        {MarkdownSlides`
### How to learn tachyons?

* http://tachyons.io
* https://tachyons.pro/
* https://atom.io/packages/atom-tachyons

---

![Ramda Logo](http://ramda.jcphillipps.com/logo/ramdaFilled_200x235.png)

# Ramda

---

### What is Ramda?

Ramda is a functional javascript utility that takes functions first and
every function is auto curried.

---

Ramda enables separation of functional logic from your presentation logic in
a very testable way.


        `}
        <Slide transition={[ 'fade' ]} bgColor='primary'>
          <Link
            target='_new'
            href='https://runkit.com/twilson63/590c7d1967f45a00121c2b6a'
          >
            <Text>Demo</Text>
          </Link>
        </Slide>
        {MarkdownSlides`
### How to learn ramdajs?

* http://ramdajs.com/
* [What Function Should I Use](https://github.com/ramda/ramda/wiki/What-Function-Should-I-Use%3F)
* [Try Ramda](http://ramdajs.com/repl/?v=0.23.0)


        `}
        <Slide>
          <Image src={images.now} margin='0px auto 40px' height='293px' />
          <Heading size={6} textColor='secondaryπ' caps>NowJS</Heading>
        </Slide>
        {MarkdownSlides`
### What is NowJS?

A more functional way of thinking about deployments! All deployments are immutable!

---

### Why NowJS? (One Line)

* One line to buy a domain
* One line to deploy your code
* One line to alias your app url

---

# Demo

---

now

---

now alias [url] [alias]

---

now domains buy foo.xyz

---

Make a change

---

now alias [url] [alias]

---

### There is more

* now secrets
* now ls
* now logs

---

### Recap

* React/Redux
* NodeJS/ExpressJS
* CouchDB/MySQL

Are strong components in your full-stack!

---

### Fun

* Tachyons
* Ramda
* Now

---

# Thank You

### Questions

        `}
        <Slide transition={[ 'fade' ]} bgColor='tertiary'>
          <Heading size={6} textColor='primary' caps>Typography</Heading>
          <Heading size={1} textColor='secondary'>Heading 1</Heading>
          <Heading size={2} textColor='secondary'>Heading 2</Heading>
          <Heading size={3} textColor='secondary'>Heading 3</Heading>
          <Heading size={4} textColor='secondary'>Heading 4</Heading>
          <Heading size={5} textColor='secondary'>Heading 5</Heading>
          <Text size={6} textColor='secondary'>Standard text</Text>
        </Slide>
        <Slide transition={[ 'fade' ]} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={[ 'fade' ]} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
