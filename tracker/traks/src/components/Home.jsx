import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WhiteWimpy from '../assets/logo.png';


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, [navigate]);

  return (
    <div className='bg-[#00C2BA] min-h-screen flex items-center justify-center'>
      <img src={WhiteWimpy} alt="Logo" className="w-[37%]" />
     
    </div>
  );
}

export default Home;
