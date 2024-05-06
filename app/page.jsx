import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>SportsBoost</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/signup" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Signup
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/compreboost" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CompreBOOST
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/esportes" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Esportes
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/listacomopes" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Listacomopes
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/perfil" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Perfil
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
