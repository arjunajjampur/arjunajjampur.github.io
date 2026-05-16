import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Work from './pages/Work';
import Unity from './pages/work/Unity';
import GuidePanels from './pages/work/GuidePanels';
import Thea from './pages/work/Thea';
import Wilson from './pages/work/Wilson';
import Modeling3D from './pages/work/Modeling3D';
import Illustration from './pages/work/Illustration';
import AgenticDS from './pages/work/AgenticDS';
import SyndicatedLoan from './pages/work/SyndicatedLoan';
import AIWorkshop from './pages/work/AIWorkshop';
import LLMAssistant from './pages/work/LLMAssistant';
import './styles.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/agentic-ds" element={<AgenticDS />} />
        <Route path="/work/syndicated-loan" element={<SyndicatedLoan />} />
        <Route path="/work/ai-workshop" element={<AIWorkshop />} />
        <Route path="/work/llm-assistant" element={<LLMAssistant />} />
        <Route path="/work/unity" element={<Unity />} />
        <Route path="/work/guidepanels" element={<GuidePanels />} />
        <Route path="/work/thea" element={<Thea />} />
        <Route path="/work/wilson" element={<Wilson />} />
        <Route path="/work/3d" element={<Modeling3D />} />
        <Route path="/work/2d" element={<Illustration />} />
      </Routes>
    </BrowserRouter>
  );
}
