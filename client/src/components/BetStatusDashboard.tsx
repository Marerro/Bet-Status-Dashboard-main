import { useAppDispatch, useAppSelector } from "../store/store";
import {
  selectAllBets,
  getAllBetsInfo,
  setFilter,
  updateBetStatus,
} from "../store/features/betsSlice";
import { useEffect } from "react";
import {
  MainContainer,
  Wrapper,
  TitleParent,
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
import toast from "react-hot-toast";

export const BetStatusDashboard = () => {
  const dispatch = useAppDispatch();
  const bets = useAppSelector(selectAllBets);
  const filter = useAppSelector((state) => state.bets.filter);
  const newStatus = useAppSelector((state) => state.bets.newStatus);

  useEffect(() => {
    dispatch(getAllBetsInfo());
  }, [dispatch]);

  const filteredBets =
    filter === "All"
      ? bets
      : bets.filter((bet: IAllBetsInfo) => bet.status === filter);

  useEffect(() => {
    if (newStatus) {
      toast.success("Status updated succesfully");
    }
  }, [newStatus]);

  return (
    <>
      <TitleParent>
        <Title>Bet Status Dashboard</Title>
      </TitleParent>
      <MainContainer>
        <Wrapper>
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
                <Th>Set new status</Th>
              </tr>
            </thead>
            <tbody>
              {filteredBets.map((bet: IAllBetsInfo) => (
                <Row key={bet.betId}>
                  <StatusTd>{bet.betId}</StatusTd>
                  <Td>{bet.userId}</Td>
                  <Td>{bet.eventName}</Td>
                  <Td>{bet.amount}</Td>
                  <Td>
                    <StatusBadge
                      $status={
                        newStatus && newStatus.betId === bet.betId
                          ? newStatus.status
                          : bet.status
                      }
                    >
                      {newStatus && newStatus.betId === bet.betId
                        ? newStatus.status
                        : bet.status}
                    </StatusBadge>
                  </Td>
                  <Td>
                    <StatusSelect
                      value={"Select status"}
                      onChange={(e) =>
                        dispatch(
                          updateBetStatus({
                            id: bet.betId,
                            status: e.target.value,
                          })
                        )
                      }
                    >
                      <option value="Select status" disabled>
                        Select status
                      </option>
                      <option value="Won">Won</option>
                      <option value="Pending">Pending</option>
                      <option value="Lost">Lost</option>
                    </StatusSelect>
                  </Td>
                </Row>
              ))}
            </tbody>
          </Table>
        </Wrapper>
      </MainContainer>
    </>
  );
};
