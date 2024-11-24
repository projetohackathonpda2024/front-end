
import Layout from "./components/layot";
import Router from "./routes/router";


const App = () => {
  return (
    <>
      <Layout>
        <section>
          <Router />
        </section>
      </Layout>
    </>
  );
};

export default App;
