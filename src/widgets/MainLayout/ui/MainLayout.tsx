import Page from "@/shared/primitives/Page/Page";
import Wrapper from "@/shared/primitives/Wrapper/Wrapper";
import { Outlet } from "react-router";
import Header from "../../Header/ui/Header";
import Footer from "../../Footer/ui/Footer";
import '../model/_mainLayoutStyles.scss';
import { ScrollToTop } from "@/shared/lib/scrollToTop/scrollToTop";

function MainLayout(): React.JSX.Element {
  return (
    <Wrapper className="wrapper">
      <ScrollToTop />
      <Header />
      <Page className="page">
        <Outlet />
      </Page>
      <Footer />
    </Wrapper>
  );
}

export default MainLayout;