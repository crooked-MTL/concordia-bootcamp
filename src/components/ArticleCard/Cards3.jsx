import { useStore } from "../../contexts/Store";
import {
  InfoDiv,
  CategoryDiv,
  TitleDiv,
  Cname,
  Tname,
  MainDiv,
  ImageDiv,
  Image,
} from "./styled-components";
import { useState, useEffect } from "react";

const Card3 = () => {
  const store = useStore();
  // const [limit, setLimit] = useState(6);
  const [third, setThird] = useState([]);

  const totalArr = store.articles;

  useEffect(() => {
    const newArr = (totalArr, limit) => {
      let index = 0;
      let arrLength = totalArr.length;
      let tempArr = [];

      for (index = 0; index < arrLength; index += limit) {
        const myChunk = totalArr.slice(index, index + limit);
        console.log(myChunk);
        tempArr.push(myChunk);
      }

      return tempArr;
    };

    let result = newArr(totalArr, 6);
    setThird(result[2]);
  }, [totalArr]);

  console.log(store.articles);

  return (
    <>
      {third?.map((article) => {
        return (
          <MainDiv>
            <ImageDiv>
              <Image
                src={
                  "https://via.placeholder.com/400x195?text=alex_glickman@hotmail.com"
                }
              />
            </ImageDiv>

            <InfoDiv>
              <TitleDiv>
                <Tname>{article.fields.title}</Tname>
              </TitleDiv>

              <CategoryDiv>
                <Cname>{article.fields.category}</Cname>
              </CategoryDiv>
            </InfoDiv>
          </MainDiv>
        );
      })}
      {/* <button
        onClick={() => {
          setLimit(limit + 2);
          setTop(top + 2);
        }}
      >
        click
      </button> */}
    </>
  );
};

export default Card3;