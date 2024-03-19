import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Main from "../components/Main";
import NewsList from "../components/NewsList"

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header/>
      <Main>
      </Main>
        <Form />
        <NewsList />
        <Accordion />
      <Footer />
    </div>
  );
}

export default Home;