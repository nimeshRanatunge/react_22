import ReactDOM from 'react-dom/client';

import './components/css/index.css';
import App from './App';

//createRoot - main place that react application rendered to--
const root = ReactDOM.createRoot(document.getElementById('rootx'));
root.render(<App />);
