
import Layout from "./components/layot";
import Router from "./routes/router";
import Hearder from "./components/hearder";


const App = () => {
  return (
    <>
     <Hearder />
      <Layout>
        <section>
          <Router />
        </section>
      </Layout>
    </>
  );
};

export default App;
