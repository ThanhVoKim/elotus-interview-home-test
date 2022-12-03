import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
