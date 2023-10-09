import user from "../../store/useUserStore";

function Home() {
  const users = user((state) => state.users);
  return (
    <div>
      {users.map((user) => (
        <p key={Math.random()}>
          {user.name} | {user.email}
        </p>
      ))}
    </div>
  );
}

export default Home;
