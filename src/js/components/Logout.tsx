import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Logout: React.FC<any> = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    // Googleログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};
