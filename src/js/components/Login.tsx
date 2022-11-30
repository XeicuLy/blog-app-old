import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC<any> = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginInWithGoogle = () => {
    // Googleログイン操作
    signInWithPopup(auth, provider).then(result => {
      // string型にbooleanは指定できないので、"true"と、文字列にしました。
      localStorage.setItem('isAuth', 'true');
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};
