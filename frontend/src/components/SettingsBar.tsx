import React, { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsBar = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        title={theme === "light" ? t("Switch to dark mode") : t("Switch to light mode")}
      >
        {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default SettingsBar;
