import { toast, ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions = {
	position: 'top-right',
	autoClose: 3500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
	toastId: 'id',
};

export function toastNotify(content = '', options: ToastOptions) {
	toast(content, { ...toastOptions, ...options });
}
