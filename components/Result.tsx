import { RANK_POINTS } from "@/lib/constant";
import { Dish, VotesState } from "@/lib/types";
import React from "react";


interface Props {
    dishes: Dish[];
    votes: VotesState;
    currentUser: string;
}


const Result: React.FC<Props> = ({ dishes, votes, currentUser }) => {
    const points: Record<number, number> = {};


    Object.values(votes).forEach(userVotes => {
        Object.entries(userVotes).forEach(([dishId, rank]) => {
            points[Number(dishId)] = (points[Number(dishId)] || 0) + RANK_POINTS[rank];
        });
    });


    const sorted = [...dishes].sort(
        (a, b) => (points[b.id] || 0) - (points[a.id] || 0)
    );


    const myVotes = votes[currentUser] || {};


    return (
        <div className="space-y-3">
            {sorted.map(dish => (
                <div
                    key={dish.id}
                    className="flex items-center text-left justify-between border rounded p-3"
                >
                    <div className="font-semibold">
                        {dish.dishName}
                    </div>

                    <div className="text-gray-600">
                        {points[dish.id] || 0} pts
                    </div>

                    <div className="text-blue-600">
                        {myVotes[dish.id]
                            ? `Your Rank: ${myVotes[dish.id]}`
                            : "—"}
                    </div>
                </div>
            ))}
        </div>

    );
};


export default Result;