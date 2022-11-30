import { css } from '@emotion/react';

export const CreatePost = () => {
  return (
    <div css={createPostPageStyle}>
      <div css={postContainerStyle}>
        <h1>記事を投稿する</h1>
        <div css={inputPostStyle}>
          <h2>タイトル</h2>
          <input type='text' placeholder='タイトルを記入' />
        </div>
        <div css={inputPostStyle}>
          <h2>投稿</h2>
          <textarea placeholder='投稿内容を記入'></textarea>
        </div>
        <button css={postButtonStyle}>投稿する</button>
      </div>
    </div>
  );
};

const createPostPageStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
const postContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  gap: 10px;
  padding: 50px 40px;
  box-shadow: 5px 9px 15px -5px #777777;
  & h1 {
    margin: 0;
  }
  & input {
    width: 100%;
    height: 30px;
    outline: none;
    padding: 0px 4px;
  }
`;
const inputPostStyle = css`
  & textarea {
    width: 100%;
    height: 120px;
    outline: none;
    padding: 7px;
  }
`;
const postButtonStyle = css`
  background-color: #3d77a5;
  padding: 10px 0;
  border: none;
  box-shadow: 5px 9px 15px -5px #777777;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
  }
`;
