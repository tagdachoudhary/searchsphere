import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const BACKEND_URL = "https://searchsphere-backend-16ps.onrender.com";

function Navbar({
  onSearch,
  currentQuery = "",
}) {
  const [query, setQuery] =
    useState(currentQuery);

  const [user, setUser] =
    useState(null);

  const [authLoading, setAuthLoading] =
    useState(true);

  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  // --------------------------------------------------
  // CHECK LOGIN STATUS
  // --------------------------------------------------

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/auth/me`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();

        if (data.authenticated) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(
          "AUTH CHECK ERROR:",
          error
        );

        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    checkUser();
  }, []);

  const handleSearch = () => {
    const trimmedQuery =
      query.trim();

    if (trimmedQuery !== "") {
      onSearch(trimmedQuery);
    }
  };

  const handleLogin = () => {
    window.location.href =
      `${BACKEND_URL}/auth/google`;
  };

  const handleLogout = () => {
    window.location.href =
      `${BACKEND_URL}/auth/logout`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        {/* LOGO */}
        <h1 className="shrink-0 text-2xl font-bold text-white">
          Search
          <span className="text-blue-400">
            Sphere
          </span>
        </h1>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-8 text-gray-400 lg:flex">
          <button className="transition hover:text-white">
            Features
          </button>

          <button className="transition hover:text-white">
            Technology
          </button>

          <button className="transition hover:text-white">
            About
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-56 bg-transparent text-white outline-none placeholder:text-gray-500"
          />

          <button
            onClick={handleSearch}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500"
          >
            Search
          </button>

        </div>

        {/* AUTH */}
        <div className="shrink-0">

          {authLoading ? (
            <div className="h-10 w-24 animate-pulse rounded-xl bg-zinc-800" />
          ) : user ? (
            <div className="flex items-center gap-3">

              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-10 w-10 rounded-full border border-zinc-700"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  👤
                </div>
              )}

              <div className="hidden text-left xl:block">
                <p className="max-w-[140px] truncate text-sm font-semibold text-white">
                  {user.name}
                </p>

                <p className="max-w-[140px] truncate text-xs text-gray-500">
                  {user.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-zinc-700 px-3 py-2 text-sm text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
              >
                Logout
              </button>

            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 font-semibold text-white transition hover:border-cyan-500/50 hover:bg-zinc-800"
            >
              <span className="text-lg">
                G
              </span>

              <span>
                Sign in
              </span>
            </button>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;