import { useAppDispatch, useAppSelector } from "../store/store";
import {
  getAllBets,
  getAllBetsInfo,
  setFilter,
} from "../store/features/betsSlice";
import { useEffect } from "react";
import {
  Wrapper,
  Title,
  Table,
  Th,
  Td,
  Row,
  StatusBadge,
  StatusTd,
  StatusSelect,
  StatusContainer,
} from "./BetStatusDashboard.style";
import { IAllBetsInfo } from "../types/bets";

export const BetStatusDashboard = () => {
  const dispatch = useAppDispatch();
  const bets = useAppSelector(getAllBets);
  const filter = useAppSelector((state) => state.bets.filter);

  const filteredBets =
    filter === "All" ? bets : bets.filter((bet) => bet.status === filter);

  useEffect(() => {
    dispatch(getAllBetsInfo());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Title>Bet Status Dashboard</Title>
        <StatusContainer>
          <StatusSelect
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
          >
            <option value="All">All</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
            <option value="Pending">Pending</option>
          </StatusSelect>
        </StatusContainer>
        <Table>
          <thead>
            <tr>
              <Th>Bet ID</Th>
              <Th>User ID</Th>
              <Th>Event Name</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {filteredBets.map((bet: IAllBetsInfo, index: number) => (
              <Row key={bet.betId} $index={index}>
                <StatusTd $index={index}>{bet.betId}</StatusTd>
                <Td>{bet.userId}</Td>
                <Td>{bet.eventName}</Td>
                <Td>{bet.amount}</Td>
                <Td>
                  <StatusBadge $status={bet.status}>{bet.status}</StatusBadge>
                </Td>
              </Row>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
};
