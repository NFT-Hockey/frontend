import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "./pages/game-messages";
import ContractsTest from "./pages/contracts-test";
import BuyCards from "./pages/trade-cards/buy-cards";
import BuyCardView from "./pages/trade-cards/buy-cards/id";
import SellCards from "./pages/trade-cards/sell-cards";
import SellCardView from "./pages/trade-cards/sell-cards/id";
import SetLineups from "./pages/manage-team/set-lineups";
import Result from "./pages/result";
import MintNft from "./pages/trade-cards/mint-nft";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/game" element={<Game />} />
              <Route path="/contracts-test" element={<ContractsTest />} />
              <Route path="/trade-cards/buy-cards" element={<BuyCards />} />
              <Route path="/trade-cards/buy-cards/:tokenId" element={<BuyCardView />} />
              <Route path="/trade-cards/sell-cards" element={<SellCards />} />
              <Route path="/trade-cards/sell-cards/:tokenId" element={<SellCardView />} />
              <Route path="/trade-cards/mint-nft" element={<MintNft />} />
              <Route path="/manage-team/set-lineups" element={<SetLineups />} />
              <Route path="/result" element={<Result />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
