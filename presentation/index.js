// Import React
import React from "react"

// Import Spectacle Core tags
import {
  Appear,
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
  Image,
  Code,
  CodePane
} from "spectacle"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const images = {
  now: require("../assets/white-bg-logo-1200.png"),
  jrs: require("../assets/jrs-code-logo.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  twentyone: require("../assets/twenty-one.png"),
  markdown: require("../assets/markdown.png")
}

preloader(images)

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  { primary: "Montserrat", secondary: "Helvetica" }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Fun Functional JavaScript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            W/REACT
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            AllThingsOpen, Raliegh, NC, Oct 23, 2017
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Who Am I?
          </Heading>
          <Heading size={1} textColor="secondary">
            Tom Wilson
          </Heading>

          <Heading size={5} textColor="secondary">
            @twilson63
          </Heading>
          <Text size={6} textColor="secondary" />
        </Slide>
        <Slide>
          <Image src={images.jrs} />
          <Text>12 Week Immersive Training</Text>
          <Text>Jan | May | Sept</Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary">
            What is Functional JavaScript?
          </Heading>
        </Slide>
        <Slide>
          <Image height={400} src={images.twentyone} />
          <Text>{"21.now.sh"}</Text>
        </Slide>
        <Slide>
          <Appear>
            <Image
              height={200}
              src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
            />
          </Appear>
          <Appear>
            <Image
              height={200}
              src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
            />
          </Appear>
          <hr />
          <Appear>
            <Image
              height={200}
              src="http://ramda.jcphillipps.com/logo/ramdaFilled_200x235.png"
            />
          </Appear>
          <Appear>
            <Image
              height={200}
              src="https://opencollective-production.s3-us-west-1.amazonaws.com/5e1b02e0-bce5-11e6-9ca1-bb6c7a9a84e0.png"
            />
          </Appear>
          <Appear>
            <Image
              height={200}
              src="https://pbs.twimg.com/profile_images/784360755319697408/cw6zhtGK.jpg"
            />
          </Appear>
        </Slide>
        <Slide>
          <Text textColor="tertiary">Characteristics of FP JS</Text>
          <List>
            <Appear>
              <ListItem>Declarative</ListItem>
            </Appear>
            <Appear>
              <ListItem>Immutable</ListItem>
            </Appear>
            <Appear>
              <ListItem>Composable</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary">
            Declarative
          </Heading>
          <Appear>
            <Text>
              <span style={{ textDecoration: "line-through" }}>
                Describe How?
              </span>
            </Text>
          </Appear>
          <Appear>
            <Text>Describe What!</Text>
          </Appear>
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "1em" }}
            lang="js"
            source={require("raw-loader!../assets/router.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "1.1em" }}
            lang="jsx"
            source={require("raw-loader!../assets/home.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "1em" }}
            lang="jsx"
            source={require("raw-loader!../assets/player.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: ".8em" }}
            lang="jsx"
            source={require("raw-loader!../assets/dealer.example")}
          />
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary">
            Immutable
          </Heading>
          <Appear>
            <Text>
              <span style={{ textDecoration: "line-through" }}>Update</span>
            </Text>
          </Appear>
          <Appear>
            <Text>Replace</Text>
          </Appear>
        </Slide>
        <Slide>
          <Image
            height={500}
            src="https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAc3AAAAJGEzNjRmMWZmLWI3YTgtNGNmYy1hOTU0LTQ0ZDU4ZjgwMDJiZQ.jpg"
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: ".8em" }}
            lang="jsx"
            source={require("raw-loader!../assets/react-index.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: ".8em" }}
            lang="jsx"
            source={require("raw-loader!../assets/redux.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: ".6em" }}
            lang="jsx"
            source={require("raw-loader!../assets/newgame.example")}
          />
        </Slide>
        <Slide>
          <Image
            height={400}
            src="https://hptechblogs.com/content/images/2017/08/2674118914543364345a1efea35608aa.gif"
          />
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary">
            Composable
          </Heading>
          <Appear>
            <Text>
              <span style={{ textDecoration: "line-through" }}>
                Inheritance or Mixin
              </span>
            </Text>
          </Appear>
          <Appear>
            <Text>Compose or Combine</Text>
          </Appear>
        </Slide>

        <Slide>
          <CodePane
            style={{ fontSize: ".9em" }}
            lang="js"
            source={require("raw-loader!../assets/reducers.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: ".9em" }}
            lang="js"
            source={require("raw-loader!../assets/layout.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "1em" }}
            lang="js"
            source={require("raw-loader!../assets/home.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "1em" }}
            lang="js"
            source={require("raw-loader!../assets/button.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            style={{ fontSize: "1em" }}
            lang="js"
            source={require("raw-loader!../assets/getScore.example")}
          />
        </Slide>
        <Slide>
          <Image
            height={200}
            src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
          />
          <Image
            height={200}
            src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
          />
          <hr />
          <Image
            height={200}
            src="http://ramda.jcphillipps.com/logo/ramdaFilled_200x235.png"
          />
          <Image
            height={200}
            src="https://opencollective-production.s3-us-west-1.amazonaws.com/5e1b02e0-bce5-11e6-9ca1-bb6c7a9a84e0.png"
          />
          <Image
            height={200}
            src="https://pbs.twimg.com/profile_images/784360755319697408/cw6zhtGK.jpg"
          />
        </Slide>
        <Slide>
          <Heading>Challenge</Heading>
          <Text>Lets calculate the players winning percentage</Text>
          <Text>And allow the player to tweet it</Text>
        </Slide>
        <Slide>
          <Text>Live Code</Text>
        </Slide>
        <Slide>
          <Heading>Thank You</Heading>
        </Slide>
        <Slide>
          <Heading>Resources</Heading>
          <List>
            <ListItem>
              <a href="https://21.now.sh">Game</a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/jrs-innovation-center/twenty-one">
                Source Code
              </a>
            </ListItem>
          </List>
        </Slide>
        <Slide />
      </Deck>
    )
  }
}
