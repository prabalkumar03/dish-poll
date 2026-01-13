import React from "react";
import { Dish, UserVotes, Rank } from "../lib/types";
import { truncateString } from "@/lib/constant";


interface Props {
    dishes: Dish[];
    userVotes: UserVotes;
    onVote: (dishId: number, rank: Rank | null) => void;
}


const Vote: React.FC<Props> = ({ dishes, userVotes, onVote }) => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
            {dishes.map(dish => (
                <div key={dish.id} className="border rounded p-3 shadow">
                    <img
                        src={dish.image}
                        alt={dish.dishName}
                        className="w-full h-40 object-cover rounded"
                    />
                    <h3 className="font-semibold mt-2">{dish.dishName}</h3>
                    <p className="text-sm text-gray-600">{truncateString(dish.description)}</p>

                    <div className="mt-3 space-y-1">
                        {[1, 2, 3].map(rank => (
                            <label
                                key={rank}
                                className="flex items-center gap-2 text-sm cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name={`rank-${dish.id}`}
                                    checked={userVotes[dish.id] === rank}
                                    onChange={() => onVote(dish.id, rank as Rank)}
                                />
                                Rank {rank}
                            </label>
                        ))}
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input
                                type="radio"
                                name={`rank-${dish.id}`}
                                checked={!userVotes[dish.id]}
                                onChange={() => onVote(dish.id, null)}
                            />
                            No Rank
                        </label>
                    </div>
                </div>
            ))}
        </div>

    );
};


export default Vote;