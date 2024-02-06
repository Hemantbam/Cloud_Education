import { React} from 'react'
import Nav from './Components/navigationBar/Nav'
import Heading from './Components/Heading/heading'
import SearchResults from './Components/Body/SearchResults'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
      <Nav />
      <Heading/>
      <SearchResults/>
      <Footer/>
    </>
  )
}

export default App
