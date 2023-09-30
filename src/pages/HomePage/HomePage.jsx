// emotion
import { Helmet } from "react-helmet"
import { Container } from "./HomePage.styled"

// react icons
import { AiFillBook } from "react-icons/ai"

export default function HomePage() {
  return (
    <Container>
      
      <Helmet>
        <title>Home</title>
      </Helmet>

      <AiFillBook style={{fill: '#4f1c1c', width: 300,height: 300}} />
      <h1>Welcome to the Phone book</h1>
      <h2>Log in to your account to see your contacts</h2>

    </Container>
  )
}