import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleFeed from "./components/ArticleCard/Articlefeed";
import Feed2 from "./components/ArticleCard/Feed2";
import Feed3 from "./components/ArticleCard/Feed3";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function App() {
  const store = useStore();

  console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>
          <Swiper
            style={{
              display: "flex",
              maxWidth: "900px",
            }}
          >
            <SwiperSlide>
              <ArticleFeed />
            </SwiperSlide>
            <SwiperSlide>
              <Feed2 />
            </SwiperSlide>
            <SwiperSlide>
              <Feed3 />
            </SwiperSlide>
          </Swiper>
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
