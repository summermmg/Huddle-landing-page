import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header' 
import GlobalStyles from './components/styles/Global'
import content from './content'
import Card from './components/Card'
import Footer from './components/Footer'

const theme = {
  colors: {
    header: 'hsl(193, 100%, 96%)',
    body: '#fff',
    footer: 'hsl(192, 100%, 9%)'
  },
  mobile: '380px'
}

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;