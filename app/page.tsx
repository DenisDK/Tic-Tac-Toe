"use client";

import React, { useState } from "react";

import { useEffect } from "react";
import PlayerInfo from "@/components/PlayerInfo";
import GameStatus from "@/components/GameStatus";
import GameControls from "@/components/GameControls";
import NewGameButton from "@/components/NewGameButton";
import Board from "@/components/Board";
import Modal from "@/components/Modal";
import { Player, SymbolType } from "@/types/Player";
import { checkWinner, initBoard, isDraw } from "@/utils/gameUtils";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: "Гравець 1", symbol: "X", wins: 0 },
    { id: 2, name: "Гравець 2", symbol: "O", wins: 0 },
  ]);

  const [selectedSize, setSelectedSize] = useState(3);
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState<CellValue[][]>(initBoard(3));
  const [currentPlayer, setCurrentPlayer] = useState<SymbolType>("X");

  const [gamesPlayed, setGamesPlayed] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [playerTimes, setPlayerTimes] = useState<{
    [key in SymbolType]: number;
  }>({
    X: 0,
    O: 0,
  });
  const [turnStart, setTurnStart] = useState<number>(Date.now());
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const [gameEnded, setGameEnded] = useState(false);

  function handleCellClick(row: number, col: number) {
    if (gameEnded || board[row][col]) return;

    setPlayerTimes((prev) => ({
      ...prev,
      [currentPlayer]: prev[currentPlayer],
    }));

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      setPlayers((prev) =>
        prev.map((p) =>
          p.symbol === currentPlayer ? { ...p, wins: p.wins + 1 } : p
        )
      );
      setGamesPlayed(gamesPlayed + 1);
      setGameEnded(true);

      const winner = players.find((p) => p.symbol === currentPlayer);
      const winnerTime = playerTimes[currentPlayer];
      setTimeout(() => {
        setModalMessage(
          `${winner?.name} переміг за ${winnerTime} сек. Вітаємо!`
        );
        setModalOpen(true);
      }, 2000);

      return;
    }

    if (isDraw(newBoard)) {
      setGamesPlayed(gamesPlayed + 1);
      setGameEnded(true);

      const totalTime = playerTimes["X"] + playerTimes["O"];
      setTimeout(() => {
        setModalMessage(
          `Нічия! Загальний час гри: ${totalTime} сек. Спробуйте ще :)`
        );
        setModalOpen(true);
      }, 2000);

      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setTurnStart(Date.now());
  }

  function handleSizeChange(newSize: number) {
    setSelectedSize(newSize);
  }

  function handleNewGame() {
    setSize(selectedSize);
    setBoard(initBoard(selectedSize));
    setCurrentPlayer("X");
    setPlayerTimes({ X: 0, O: 0 });
    setTurnStart(Date.now());
    setGameEnded(false);
  }

  useEffect(() => {
    if (modalOpen) {
      if (intervalId) clearInterval(intervalId);
      return;
    }
    const id = setInterval(() => {
      setPlayerTimes((prev) => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1,
      }));
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [modalOpen, currentPlayer]);

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-2xl font-bold">Хрестики Нулики</h1>
        <div className="flex justify-between items-center mt-4">
          {players.map((player) => (
            <PlayerInfo
              key={player.id}
              player={player}
              time={playerTimes[player.symbol]}
            />
          ))}
        </div>
        <GameStatus
          players={players}
          gamesPlayed={gamesPlayed}
          currentPlayer={currentPlayer}
        />
        <GameControls
          selectedSize={selectedSize}
          onSizeChange={handleSizeChange}
        />
      </div>
      <Board board={board} onCellClick={handleCellClick} />
      <NewGameButton onClick={handleNewGame} />
      <Modal
        open={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
