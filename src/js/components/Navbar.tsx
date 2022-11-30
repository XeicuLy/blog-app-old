import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav css={navStyle}>
      <Link css={linkStyle} to='/'>
        <FontAwesomeIcon css={iconStyle} icon={faHouse} />
        ホーム
      </Link>
      <Link css={linkStyle} to='/createpost'>
        <FontAwesomeIcon css={iconStyle} icon={faFilePen} />
        記事投稿
      </Link>
      <Link css={linkStyle} to='/login'>
        <FontAwesomeIcon css={iconStyle} icon={faArrowRightToBracket} />
        ログイン
      </Link>
    </nav>
  );
};

const navStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #cd8c54;
  gap: 45px;
`;

const linkStyle = css`
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: cadetblue;
  }
`;

const iconStyle = css`
  margin-right: 5px;
`;
