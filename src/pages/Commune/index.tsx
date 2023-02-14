import { lazy } from "react";
import CommuneContent from "../../content/CommuneContent.json";

const CommuneComponent = lazy(() => import("../../components/Commune"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Commune = () => {
  return (
    <Container>
      <ScrollToTop />
      <CommuneComponent
        title={CommuneContent.title}
        content={CommuneContent.text}
        button={CommuneContent.button}
      />
    </Container>
  );
};

export default Commune;
