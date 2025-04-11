import {useAppDispatch, useAppSelector} from "../store/store";
import {getAllBets, getAllBetsInfo} from "../store/features/betsSlice";
import { useEffect } from "react";

export const BetStatusDashboard = () => {
const dispatch = useAppDispatch()
const bets = useAppSelector(getAllBets);

useEffect(() => {
    dispatch(getAllBetsInfo());
}, [dispatch])

console.log(bets);

    return (
        <>
        <table className="bg-red-500">
            <thead>
                <tr>
                    <th>Bet ID</th>
                    <th>User ID</th>
                    <th>Event Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
        </table>
        </>
    )
}