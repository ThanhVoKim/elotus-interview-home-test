import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routers from 'routes';

const App: React.FC = () => {
	return (
		<>
			<ToastContainer />
			<Routers />
		</>
	);
};

export default App;
