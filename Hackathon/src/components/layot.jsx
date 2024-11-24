import Header from "./hearder";

const Layout = ({children}) => {
    return ( 
       <>
       <Header/>
       <main>
        {children}
       </main>
       
       </>
     );
}
 
export default Layout;