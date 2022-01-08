import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header' 
import GlobalStyles from './components/styles/Global'
import content from './content'
import Card from './components/Card'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '368px'
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
    </ThemeProvider>
  );
}

export default App;