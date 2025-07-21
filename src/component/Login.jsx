import { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setMessage('Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    localStorage.setItem('user', JSON.stringify({ username, password }));
    setMessage('Account created! Please log in.');
    setIsLogin(true);
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
      setMessage('Invalid username or password.');
      return;
    }
    setMessage('Thanks for login Daily Market!');
    setTimeout(() => {
      onLoginSuccess();
    }, 1000);
  };

  return (
    <section className="login-box">
      <h2>{isLogin ? 'Login to Daily Market' : 'Create Account'}</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {!isLogin && (
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      )}
      <button onClick={isLogin ? handleLogin : handleRegister}>{isLogin ? 'Login' : 'Create Account'}</button>
      {message && <div className={message.includes('Thanks') ? 'success' : 'error'}>{message}</div>}
    </section>
  );
}

export default Login;
