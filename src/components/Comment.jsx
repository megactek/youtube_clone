import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
      <Avatar src="https://i9.ytimg.com/vi_webp/k3Vfj-elMa4/mqdefault.webp" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, id
          maxime deleniti rerum, non consectetur fugit dolorem in distinctio
          quas, soluta harum? Inventore corrupti animi aperiam quos, dolorem
          suscipit accusamus eaque quibusdam excepturi! Tempora provident amet
          facilis consequuntur veniam et, dignissimos esse! Vitae deserunt est
          assumenda culpa quos excepturi laborum.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
