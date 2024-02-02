import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}
export default Layout;
