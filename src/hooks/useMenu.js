import { useEffect, useState } from "react";
import { menuService } from "../services/menuService";

export default function useMenus() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    menuService
      .getAll()
      .then(setMenus)
      .finally(() => setLoading(false));
  }, []);

  return { menus, loading, setMenus };
}
