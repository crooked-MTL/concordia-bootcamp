import styled from "styled-components";

export const FeedDiv = styled.div`
  background-image: linear-gradient(180deg, rgba(255, 0, 0, 0), #ffcfdc);
  padding-left: 33px;
  padding-top: 33px;
  z-index: 1;
  @media (min-width: 900px) {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: space-evenly;
    row-gap: space-evenly;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 300px;
  margin-bottom: 33px;
  border-radius: 25px;
  box-shadow: 0px 5px 8px #888888;
  transition: transform 300ms ease;
  z-index: 50;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
export const ImageDiv = styled.div`
  height: 65%;
  width: 100%;
`;
export const InfoDiv = styled.div`
  height: 35%;
  width: 100%;
  position: absolute;
  background-color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  bottom: 0;
  left: 0;
  padding: 10px 20px 0 20px;
  border-top: 1px solid black;
`;

export const TitleDiv = styled.div`
  height: 70%;
  width: 100%;
`;

export const CategoryDiv = styled.div`
  width: 100%;
  height: 30%;
`;

export const Tname = styled.p`
  font-size: 19px;
`;

export const Cname = styled.p`
  font-size: 14px;
  text-align: right;
`;

export const Image = styled.img`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
