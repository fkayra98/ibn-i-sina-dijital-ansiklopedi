import { useEffect, useState } from "react";

function readPath() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

export function useRoute() {
  const [route, setRoute] = useState(() => ({
    path: readPath(),
    hash: window.location.hash,
  }));

  useEffect(() => {
    const onPop = () => setRoute({ path: readPath(), hash: window.location.hash });
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onPop);
    };
  }, []);

  return route;
}

export function navigate(to) {
  const [pathPart, hashPart] = to.split("#");
  const current = window.location.pathname + window.location.hash;
  if (current === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));

  if (hashPart) {
    window.requestAnimationFrame(() => {
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (pathPart !== window.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
}

export function linkHandler(to) {
  return (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    navigate(to);
  };
}
