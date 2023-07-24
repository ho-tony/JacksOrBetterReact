import { useState, useRef } from "react";
import Card from "../../backend/card"
import { findBestCombination, getDefaultCoinMapValues } from "../../backend/Util";
import { shuffleDeck, createDeck } from "../../backend/game";


export default function AppController() {
  const [handState, setHandState] = useState([]);
  const [select, setSelected] = useState([]);
  const [hasDrawn, setHasDrawn] = useState(true);
  const [result, setResult] = useState("N/A");
  const [coins, setCoins] = useState(1000);
  const [coinGain, setCoinGain] = useState(0);
  const [resultCoinMap, setResultCoinMap] = useState(
    getDefaultCoinMapValues()
  );
  const [betSize, setBetSize] = useState(5);
  const [editTablePay, setEditTablePay] = useState(false);

  let deck = createDeck();

  const playRef = useRef(null);
  const drawRef = useRef(null);

  const play = () => {
    shuffleDeck(deck);
    let tmpHand = [];
    for (let i = 0; i < 5; i++) {
      tmpHand.push(deck.pop());
    }
    setHasDrawn(false);
    setHandState(tmpHand);
    setCoins(coins - betSize);
    setResult(findBestCombination(tmpHand));
    setCoinGain(betSize * -1);
  };

  const handleSelectedCards = (events, newCardsSelected) => {
    setSelected(newCardsSelected);
  };

  const handleDraw = () => {
    let tmpHand = [...handState];
    let tmpSelect = [...select];

    drawHand(tmpSelect, tmpHand, deck);
    setResult(findBestCombination(tmpHand));
    setHasDrawn(true);
    setSelected([]);
  };

  const handleCardKeyPress = (event) => {
    const key = event.key;
    console.log(key);
    event.preventDefault();
    if (key >= "1" && key <= "5") {
      const buttonIndex = parseInt(key) - 1;
      toggleButton(buttonIndex);
    } else if (key == " ") {
      if (playRef.current != null) playRef.current.click();
      else drawRef.current.click();
    }
  };

  const toggleButton = (buttonIndex) => {
    if (select.includes(buttonIndex)) {
      setSelected(select.filter((index) => index !== buttonIndex));
    } else {
      setSelected([...select, buttonIndex]);
    }
  };

  const drawHand = (tmpSelect, tmpHand, deck) => {
    let discard = [];
    for (let i = 0; i < 5; i++) {
      if (!tmpSelect.includes(i)) {
        discard.push(i);
      }
    }

    for (let idx of discard) {
      let cardClone = new Card(tmpHand[idx].val, tmpHand[idx].suit);
      deck.push(cardClone);
      tmpHand[idx].val = -1;
    }
    shuffleDeck(deck);
    for (let i = 0; i < tmpHand.length; i++) {
      if (tmpHand[i].val == -1) {
        tmpHand[i] = deck.pop();
      }
    }

    setHandState(tmpHand);
  };

  const handlePayTable = () => {
    setEditTablePay(!editTablePay);
  };

  const editResult = (res, event) => {
    const tmpCoinMap = new Map(resultCoinMap);
    for (let i = 0; i < tmpCoinMap.get(res).length; i++) {
      tmpCoinMap.get(res)[i] = event.target.value * (i + 1);
    }
    setResultCoinMap(tmpCoinMap);
  };

  return {
    play,
    playRef,
    select,
    handleSelectedCards,
    handState,
    hasDrawn,
    handleDraw,
    coins,
    coinGain,
    resultCoinMap,
    editTablePay,
    handleCardKeyPress,
    setCoinGain,
    result,
    setCoins,
    handlePayTable,
    editResult,
    drawRef,
  };
}
