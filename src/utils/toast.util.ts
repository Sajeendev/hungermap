import { toast } from 'react-toastify';

interface Props {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  id: string;
  isLoading?: boolean;
}

const toastTypeMap = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
  warning: toast.warning
};

export const showToast = ({ id, type, message, isLoading }: Props) => {
  const existingToast = toast.isActive(id);

  if (existingToast) {
    toast.update(id, {
      render: message,
      type: type,
      isLoading
    });
  } else {
    const notifier = toastTypeMap[type];
    if (notifier) {
      notifier(message, { toastId: id, isLoading });
    }
  }
};
