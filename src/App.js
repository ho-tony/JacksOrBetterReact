import "./App.css";
import React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import ToggleButton from "@mui/material/ToggleButton";
import { ToggleButtonGroup } from "@mui/material";
import PayTable from "./Components/PayTable";
import EditPayTableForm from "./Components/EditPayTableForm";
import AppController from "./Components/Controller/AppController";
import HeaderView from "./Components/HeaderView";

function App() {
  const {
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
  } = AppController();

  useEffect(() => {
    function handleKeyDown(event) {
      handleCardKeyPress(event);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [select]);

  useEffect(() => {
    setCoinGain(resultCoinMap.get(result)[4]);
    setCoins(coins + resultCoinMap.get(result)[4]);
  }, [result]);

  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {hasDrawn ? (
          <HeaderView
            handlePayTable={handlePayTable}
            play={play}
            playRef={playRef}
          ></HeaderView>
        ) : (
          <Grid sx={{ bgcolor: "green", minHeight: 50 }} item xs={12}></Grid>
        )}

        {editTablePay ? (
          <EditPayTableForm
            resultCoinMap={resultCoinMap}
            editResult={editResult}
          ></EditPayTableForm>
        ) : null}

        <Grid
          sx={{ bgcolor: "white" }}
          justifyContent="center"
          item
          xs={12}
          marginBottom={6}
          marginTop={7}
        >
          <ToggleButtonGroup value={select} onChange={handleSelectedCards}>
            {handState.length > 0 &&
              handState.map((card, index) => {
                return (
                  <ToggleButton
                    style={{
                      color: "white",
                    }}
                    accessKey="index"
                    tabIndex={-1}
                    value={index}
                  >
                    <img
                      draggable={false}
                      src={require(`./backend/assets/playing_cards/${card.img}`)}
                    />
                  </ToggleButton>
                );
              })}
          </ToggleButtonGroup>
        </Grid>
        {!hasDrawn && handState.length > 0 ? (
          <Button
            tabIndex={-1}
            ref={drawRef}
            style={{ backgroundColor: "blue" }}
            onClick={handleDraw}
            variant="contained"
          >
            Draw
          </Button>
        ) : null}
      </Grid>
      <Grid>
        <h1 style={{ color: "red" }}>{result}</h1>
        <h1>
          coins: {coins} ({coinGain > 0 ? "+" : null}
          {coinGain})
        </h1>
        <PayTable coinMap={resultCoinMap}></PayTable>
      </Grid>
    </div>
  );
}

export default App;
