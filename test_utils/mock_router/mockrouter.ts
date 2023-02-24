const useRouter = jest.spyOn(require("next/router"), "useRouter");
const useAuth = jest.spyOn(require("@/hooks/useAuth"), "useAuth");

function mockNextUseRouter(props: {
  route: string;
  pathname: string;
  query: string;
  asPath: string;
}) {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
  }));
}

function mockUseAuth(props: {
  user: { uid: string; email: string; displayName: string };
  login: { email: string; password: string };
  signUp: { email: string; password: string };
  logout: null;
}) {
  useAuth.mockImplementationOnce(() => ({
    user: props.user,
    login: props.login,
    signUp: props.signUp,
    logout: props.logout,
  }));
}

export { mockNextUseRouter, mockUseAuth };
