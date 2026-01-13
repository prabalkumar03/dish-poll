'use client'
import Result from "@/components/Result";
import Vote from "@/components/Vote";
import { Dish, Rank, VotesState } from "@/lib/types";
import axios from "axios";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [user, setUser] = useState<string | null>(null);
  const [tab, setTab] = useState<"vote" | "results">("vote");
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [votes, setVotes] = useState<VotesState>(() =>
    JSON.parse(localStorage.getItem("votes") || "{}")
  );
  const router = useRouter()

  const getData = async () => {
    const response = await axios.get(`https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`)
    setDishes(response.data)
  }
  useEffect(() => {
    const users = localStorage.getItem("userEmail");
    setUser(users)
    getData()
  }, []);



  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);


  const updateVote = (dishId: number, rank: Rank | null): void => {
    if (!user) return;


    setVotes(prev => {
      const userVotes = { ...(prev[user] || {}) };
      if (rank) {
        Object.keys(userVotes).forEach(id => {
          if (userVotes[Number(id)] === rank) delete userVotes[Number(id)];
        });
        userVotes[dishId] = rank;
      } else {
        delete userVotes[dishId];
      }
      toast.info("Rank Updated Suceesfully")
      return { ...prev, [user]: userVotes };
    });
  };
  const handlelogout = () => {
    setUser(null)
    localStorage.clear()
    Cookies.remove('accessToken');
    router.push('/login')
    toast.info('Logout Successfuly')
  }
  
  return (
    <div className="p-5">
      <div className="flex justify-between p-5">
        <div className="flex gap-4">
          <button className="p-5 bg-blue-700 rounded-[10px]" onClick={() => setTab("vote")}>Vote</button>
          <button className="p-5 bg-blue-700 rounded-[10px]" onClick={() => setTab("results")}>Results</button>
        </div>
        <button className="p-5 bg-red-700 rounded-[10px]" onClick={handlelogout}>Logout</button>
      </div>
      {user && tab === "vote" && (
        <Vote
          dishes={dishes}
          userVotes={votes[user] ?? {}}
          onVote={updateVote}
        />
      )}

      {user && tab === "results" && (
        <Result
          dishes={dishes}
          votes={votes}
          currentUser={user}
        />
      )}

    </div>
  );
}
