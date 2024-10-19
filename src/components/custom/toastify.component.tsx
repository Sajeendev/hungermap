import { Slide, ToastContainer } from 'react-toastify';

const ToastifyComponent = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      limit={3}
      transition={Slide}
      style={{ fontSize: '14px' }}
      theme="dark"
    />
  );
};

export default ToastifyComponent;
