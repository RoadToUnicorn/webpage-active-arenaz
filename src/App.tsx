import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages Import
const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));

function App() {
    return (
        <div className="flex min-h-full flex-col">
            <Router
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />

                        <Route path="*" element={<Home />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
