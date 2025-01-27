import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter";
import TimeCount from "./components/TimeCount";
import Toggle from "./components/Toggle";
import UserInput from "./components/UserInput";
import DList from "./components/DList";
import FetchData from "./components/FetchData";
import Navbar from "./components/Navbar";
import Home from "./Home";
import RandomQ from "./components/RandomQ";
import Upload from "./components/Upload";
import Login from "./components/Login";
import { Weather } from "./components/Weather";
import { Search } from "./components/Search";
import { PickColor } from "./components/pickColor";
import Pagination from "./components/Pagination";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import TDList from "./components/TDList";
import { Footer } from "./components/Footer";
import PageReducer from "./components/PageReducer";
import Authenticate from "./components/Authenticate";
import Count from "./components/Count";
import { AuthProvider } from "./context/AuthContext";
import Drag from "./components/Drag";
import Translate from "./components/Translate";
import { TranslateProvider } from "./context/TranslateContext";
import FetchApi from "./components/FetchApi";
import MultiState from "./components/MultiState";
import Gallery from "./components/Gallery";

function App() {
  const quotes = [
    "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    "It is impossible to manufacture or imitate love",
    "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
    "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
    "Every human life is worth the same, and worth saving.",
    "Have a biscuit, Potter.",
    "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    "Socks are Dobby’s favorite, favorite clothes, sir!",
  ];
  return (
    <div
      style={{
        backgroundColor: "#242424",
        color: "white",
        paddingBottom: "20px",
      }}
    >
      <Router>
        <AuthProvider>
          <CartProvider>
            <TranslateProvider>
              <Navbar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/counter" element={<Counter />} />
                  <Route path="/dlist" element={<DList />} />
                  <Route path="/toggle" element={<Toggle />} />
                  <Route path="/fetchdata" element={<FetchData />} />
                  <Route path="/timecount" element={<TimeCount />} />
                  <Route path="/userinput" element={<UserInput />} />
                  <Route path="/randomquotes" element={<RandomQ />} />
                  <Route path="/uploadimage" element={<Upload />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/search" element={<Search quotes={quotes} />} />
                  <Route path="/colorpick" element={<PickColor />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/tdlist" element={<TDList />} />
                  <Route path="/rpage" element={<PageReducer />} />
                  <Route path="/auth" element={<Authenticate />} />
                  <Route path="/count" element={<Count />} />
                  <Route path="/drag" element={<Drag />} />
                  <Route path="/translate" element={<Translate />} />
                  <Route path="/fetchapi" element={<FetchApi />} />
                  <Route path="/multistate" element={<MultiState />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route
                    path="/pagination"
                    element={<Pagination quotes={quotes} quotesPerPage={2} />}
                  />
                </Routes>
              </div>
              <Footer />
            </TranslateProvider>
          </CartProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
