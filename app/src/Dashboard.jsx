function Dashboard() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">
      
      <h2>Welcome to the Dashboard!</h2>
      <p>This is a protected page.</p>
  
      <button onClick={logout}>Logout</button>
      
    </div>
  );
}

export default Dashboard;
