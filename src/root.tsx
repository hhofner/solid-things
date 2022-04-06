// @refresh reload
import { Routes } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { styled } from "solid-styled-components";
import Sidebar from "./components/Nav";

const Layout = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default function Root() {
  return (
    <>
      <ErrorBoundary>
        <Layout>
          <Sidebar />
          <Routes />
        </Layout>
      </ErrorBoundary>
    </>
  );
}
